"use strict";

webshim.register('mediacapture', function ($, webshim, window, document, undefined, featureOptions) {
  "use strict";

  var hasCamera = -1;
  var _checkCameras = $.noop;
  var sel = 'input[type="file"].ws-filereader, input[type="file"].ws-capture';
  var cameraListPromise = $.Deferred(); //

  (function () {
    var tmp;
    var hasNativeUserMedia = !!(navigator.getUserMedia && !navigator.wsGetUserMedia);
    var hasFlash = swfmini.hasFlashPlayerVersion('11.3');

    var writeToStorage = function writeToStorage() {
      try {
        sessionStorage.setItem('wsCameras', JSON.stringify(hasCamera));
      } catch (e) {}
    };

    var reject = function reject() {
      hasCamera = 0;
      writeToStorage();
      cameraListPromise.reject(hasCamera);
    };

    var resolve = function resolve() {
      writeToStorage();
      cameraListPromise.resolve(hasCamera);
    };

    try {
      tmp = JSON.parse(sessionStorage.getItem('wsCameras'));

      if (tmp == null) {
        hasCamera = -1;
      }
    } catch (e) {}

    if (hasCamera === 0 || hasCamera == -1 && !hasNativeUserMedia && !hasFlash) {
      reject();
    } else if (hasFlash) {
      _checkCameras = function checkCameras() {
        var mediaOptions = webshim.cfg.mediaelement;
        var playerSwfPath = mediaOptions.playerPath || webshim.cfg.basePath + "swf/" + (mediaOptions.playerName || 'JarisFLVPlayer.swf');
        var id = 'wscameralistdetection';
        var vars = {
          controltype: '1',
          jsapi: '1',
          source: '',
          id: id,
          evtId: id
        };
        var attrs = {
          id: id,
          name: id
        };
        var params = {
          allowscriptaccess: 'always',
          allowNetworking: 'all'
        };
        var $dom = $('<div><div id="' + id + '"></div></div>').css({
          position: 'absolute',
          left: -999,
          width: 5,
          height: 5,
          overflow: 'hidden'
        }).appendTo('body');
        webshim.mediaelement.jarisEvent = webshim.mediaelement.jarisEvent || {};

        webshim.mediaelement.jarisEvent[id] = function (jaris) {
          hasCamera = jaris.cameras;
          $dom.remove();

          if (hasCamera) {
            resolve();
          } else {
            reject();
          }
        };

        _checkCameras = $.noop;
        swfmini.embedSWF(playerSwfPath, id, "100%", "100%", "11.3", false, vars, params, attrs);
      };
    } else {
      hasCamera = -1;
      resolve();
    }
  })();

  var regImage = /image\/\*|image\/jp/i;

  var _loadPicker = function loadPicker() {
    webshim.ready('WINDOWLOAD', function () {
      webshim.loader.loadList(['mediacapture-picker']);
    });
    _loadPicker = $.noop;
  };

  var _createPhotoPicker = function _createPhotoPicker() {
    if ($(this).is('[capture].ws-filereader, .ws-capture') && webshim.implement(this, 'capture')) {
      var $wrapper, $customFile, $button, popover;
      var $fileinput = $(this);
      var accept = $fileinput.prop('accept') || 'image/*';

      if (!regImage.test(accept)) {
        return;
      }

      $button = $('<button type="button" class="ws-capture-button" />');
      popover = webshim.objectCreate(webshim.wsPopover, {}, $.extend({
        prepareFor: $button
      }));
      popover.element.addClass('capture-popover input-picker');

      if ($fileinput.is('.ws-custom-file > *')) {
        $customFile = $fileinput.closest('.ws-custom-file');
        $wrapper = $('<div class="ws-capture-file" />').insertAfter($customFile);
        $wrapper.append($button).append($customFile);
      } else {
        $fileinput.before($button);
      }

      popover.element.insertAfter($button);
      $button.on('click', function () {
        webshim.mediacapture.showContent($fileinput, $button, popover);
        popover.show();
      });

      _loadPicker();
    }
  };

  var createPhotoPicker = function createPhotoPicker() {
    var elem = this;

    _checkCameras();

    cameraListPromise.done(function () {
      _createPhotoPicker.call(elem);
    });
  };

  webshim.mediacapture = {
    showContent: function showContent($fileinput, $button, popover) {
      webshim.loader.loadList(['mediacapture-picker']);
      webshim.ready('mediacapture-picker', function () {
        webshim.mediacapture.showContent($fileinput, $button, popover);
      });
    }
  };
  webshim.defineNodeNamesBooleanProperty('input', 'capture');

  if (hasCamera) {
    cameraListPromise.done(function () {
      createPhotoPicker = _createPhotoPicker;
      webshim.loader.addModule('mediacapture-picker', {
        noAutoCallback: true,
        css: 'styles/forms-picker.css',
        options: featureOptions
      });
    });
    webshim.addReady(function (context, insertedElement) {
      $(sel, context).add(insertedElement.filter(sel)).filter('[accept*="image"], :not([accept]), [accept=""]').each(createPhotoPicker);
    });
    webshim.ready('WINDOWLOAD', _checkCameras);
  }

  if (document.readyState == 'complete') {
    webshim.isReady('WINDOWLOAD', true);
  }
});