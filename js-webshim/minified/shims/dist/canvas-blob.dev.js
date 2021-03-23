"use strict";

!function (a) {
  "use strict";

  var b = a.HTMLCanvasElement && a.HTMLCanvasElement.prototype,
      c = a.Blob && function () {
    try {
      return Boolean(new Blob());
    } catch (a) {
      return !1;
    }
  }(),
      d = c && a.Uint8Array && function () {
    try {
      return 100 === new Blob([new Uint8Array(100)]).size;
    } catch (a) {
      return !1;
    }
  }(),
      e = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || a.MSBlobBuilder,
      f = (c || e) && a.atob && a.ArrayBuffer && a.Uint8Array && function (a) {
    var b, f, g, h, i, j;

    for (b = a.split(",")[0].indexOf("base64") >= 0 ? atob(a.split(",")[1]) : decodeURIComponent(a.split(",")[1]), f = new ArrayBuffer(b.length), g = new Uint8Array(f), h = 0; h < b.length; h += 1) {
      g[h] = b.charCodeAt(h);
    }

    return i = a.split(",")[0].split(":")[1].split(";")[0], c ? new Blob([d ? g : f], {
      type: i
    }) : (j = new e(), j.append(f), j.getBlob(i));
  };

  a.HTMLCanvasElement && !b.toBlob && (b.mozGetAsFile ? b.toBlob = function (a, c, d) {
    a(d && b.toDataURL && f ? f(this.toDataURL(c, d)) : this.mozGetAsFile("blob", c));
  } : b.toDataURL && f && (b.toBlob = function (a, b, c) {
    a(f(this.toDataURL(b, c)));
  })), a.dataURLtoBlob = f;
}(void 0), webshim.isReady("canvas-blob", !0);