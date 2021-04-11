"use strict";

webshim.register("form-inputmode", function (a, b, c, d) {
  "use strict";

  var e = navigator.userAgent,
      f = function f(a) {
    a.removeEventListener("blur", j, !0);
  },
      g = /iphone|ipod/i.test(e),
      h = /^[\\d\*|\[0\-9\]]*[\+|\{\d*\,\d*\}|*]*$/,
      i = g || /ipad|ios/i.test(e) ? {
    "[0-9]*": 1,
    "\\d*": 1
  } : !1,
      j = function j(a) {
    f(a.target), a.target.type = "text";
  },
      k = function k() {
    d.removeEventListener("focus", m, !0), d.removeEventListener("touchstart", m, !0);
  },
      l = function l(a) {
    var b,
        c = !0;
    return i && (b = a.getAttribute("pattern") || "", (i[b] || g && (!b || !h.test(b))) && (c = !1)), c;
  },
      m = function m(a) {
    if ("text" == a.target.type && "numeric" == a.target.getAttribute("inputmode") && l(a.target)) try {
      f(a.target), a.target.addEventListener("blur", j, !0), a.target.type = "tel";
    } catch (b) {
      k();
    }
  };

  d.addEventListener("focus", m, !0), d.addEventListener("touchstart", m, !0);
});