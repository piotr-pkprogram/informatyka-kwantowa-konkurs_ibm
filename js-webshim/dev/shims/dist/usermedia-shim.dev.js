"use strict";

webshim.register('usermedia-shim', function ($, webshim, window, document, undefined, options) {
  "use strict";

  var _addMediaAPI;

  var id = 0;
  var streamCb = {};
  var hasSwf = swfmini.hasFlashPlayerVersion('11.3');
  var mediaelement = webshim.mediaelement;
  var flashEvents = {
    NotSupportedError: 1,
    PermissionDeniedError: 1,
    //not implemented yet
    ConstraintNotSatisfiedError: 1,
    onUserSuccess: 1
  };

  var noSource = function noSource() {
    return !$.prop(this, 'currentSrc') && !mediaelement.srces(this).length;
  };

  function wsGetUserMedia(constraints, successCb, failCb) {
    if (hasSwf) {
      if (!webshim.mediaelement.createSWF) {
        webshim.loader.loadList(['swfmini-embed']);
        webshim.mediaelement.loadSwf = true;
        webshim.reTest(['mediaelement-jaris'], true);
        webshim.ready('mediaelement-jaris', function () {
          createMediaRequest(constraints, successCb, failCb);
        });
      } else {
        createMediaRequest(constraints, successCb, failCb);
      }
    } else {
      failCb({
        name: 'NOT_SUPPORTED_ERROR'
      });
    }
  }

  function createMediaRequest(constraints, successCb, failCb) {
    var src;
    var media = getMediaCandidate();

    if (!media) {
      return;
    }

    id++;
    src = 'webshimstream:stream' + id;
    streamCb[src] = {
      src: src,
      success: successCb,
      fail: failCb
    };

    _addMediaAPI();
    /*
     { width: 650 },
     { width: { min: 650 }},
     { frameRate: 60 },
     { width: { max: 800 }},
     { facingMode: "user" }
     */


    mediaelement.createSWF(media, {
      srcProp: src,
      streamrequest: true,
      type: 'jarisplayer/stream'
    });
  }

  function getMediaCandidate() {
    var $media = $('video');
    $media = $media.filter('.ws-usermedia');

    if (!$media.length) {
      $media = $media.end();
    }

    if ($media.length != 1) {
      $media = $media.filter(noSource);
    }

    if ($media.length != 1) {
      webshim.error('for getUserMedia an empty video element has to be already in the DOM. If you provide multiple empty videos. please mark your suggested video using the "ws-usermedia" class.');
    }

    return $media[0];
  }

  function LocalMediaStream(data, api, id) {
    data._cTNow = Date.now();
    data._cTID = false;
    webshim.defineProperties(this, {
      _swf: {
        value: api,
        enumerable: false
      },
      _data: {
        value: data,
        enumerable: false
      },
      _wsStreamId: {
        value: id,
        enumerable: false
      }
    });
  }

  LocalMediaStream.prototype = {
    stop: function stop() {
      if (this._data._cTID) {
        clearInterval(this._data._cTID);
      }

      mediaelement.queueSwfMethod(this._data._elem, 'api_detach', [], this._data);
      this._data.ended = true;
      $(this._data._elem).trigger('ended');
    }
  };
  webshim.usermedia = {
    attach: function attach(elem, canPlaySrc, data) {
      var $media;

      if (data._usermedia == canPlaySrc.srcProp) {
        mediaelement.queueSwfMethod(data._elem, 'api_attach', [], data);
        $media = $(data._elem).trigger('loadstart');
        data._cTID = setInterval(function () {
          if (data.ended) {
            clearInterval(data._cTID);
          } else if (!data.paused) {
            data.currentTime = (Date.now() - data._cTNow) / 1000;
            $media.triggerHandler('timeupdate');
          }
        }, 250);

        if (!data.paused) {
          mediaelement.queueSwfMethod(data._elem, 'api_play', [], data);
        }
      } else {
        webshim.error('something went wrong');
      }
    },
    request: function request(elem, canPlaySrc, data) {
      data._usermedia = canPlaySrc.srcProp;

      if (!options.inline && !$(elem).hasClass('ws-inlineusermedia')) {
        $(data.api).css({
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 150,
          zIndex: '999999'
        });
      } else {
        $(data.api).css({
          position: 'relative',
          zIndex: '999999'
        });
      }
    }
  };

  _addMediaAPI = function addMediaAPI() {
    if (!webshim.mediaelement.createSWF) {
      return;
    }

    _addMediaAPI = $.noop;

    var revert = function revert(data) {
      setTimeout(function () {
        $(data.api).css({
          position: '',
          top: '',
          left: '',
          width: '',
          height: '',
          zIndex: ''
        });

        if ($.prop(data._elem, 'controls')) {
          $.prop(data._elem, 'controls', true);
        }
      }, 50);
    };

    var fail = function fail(jaris, data) {
      revert(data);

      streamCb[data._usermedia].fail({
        name: jaris.type
      });
    };

    $.extend(mediaelement.onEvent, {
      NotSupportedError: fail,
      PermissionDeniedError: fail,
      //not implemented yet
      ConstraintNotSatisfiedError: fail,
      onUserSuccess: function onUserSuccess(jaris, data) {
        revert(data);

        streamCb[data._usermedia].success(new LocalMediaStream(data, data.api, data._usermedia));
      }
    });
  };

  webshim.ready('mediaelement-jaris', _addMediaAPI);
  webshim.getUserMedia = wsGetUserMedia;
  navigator.wsGetUserMedia = wsGetUserMedia;
  webshim.isReady('usermedia-api', true);
});