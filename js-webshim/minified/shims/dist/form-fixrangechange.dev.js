"use strict";

webshims.register("form-fixrangechange", function (a) {
  "use strict";

  var b = {
    trigger: function trigger() {
      b.blockElement && (b.blockElement = !1, setTimeout(function () {
        b.requestedChange && b.value != b.requestedChange.value && a(b.requestedChange).trigger("change"), b.value = !1;
      }, 9));
    },
    lastValue: !1,
    updateInputValue: function updateInputValue(a) {
      b.lastValue = a.target.value;
    },
    triggerInput: function triggerInput(c) {
      b.lastValue !== !1 && b.lastValue != c.target.value && a(c.target).trigger("input");
    },
    inputTeardown: function inputTeardown(c) {
      a(c.target).off("input", b.updateInputValue).off("blur", b.inputTeardown), b.lastValue = !1;
    },
    inputSetup: function inputSetup(c) {
      "range" == c.target.type && (b.inputTeardown(c), b.lastValue = c.target.value, a(c.target).on("input", b.updateInputValue).on("blur", b.inputTeardown));
    }
  };
  a.each([{
    name: "key",
    evt: "keyup"
  }, {
    name: "mouse",
    evt: "mouseup"
  }, {
    name: "touch",
    evt: "touchend"
  }], function (c, d) {
    var e = (d.name + "Setup", d.name + "Commit");
    b[d.name + "Block"] = function (c) {
      b.blockElement || "range" != c.target.type || (b.blockElement = c.target, b.value = c.target.value, a(b.blockElement).off("blur", b.trigger).on("blur", b.trigger), a(document.body).off(d.evt, b[e]).on(d.evt, b[e]));
    }, b[e] = function () {
      a(document.body).off(d.evt, b[e]), b.trigger();
    };
  }), a(document.body || "html").on({
    mousedown: b.mouseBlock,
    "keydown kepress": function keydownKepress(a) {
      a.keyCode < 45 && a.keyCode > 30 && b.keyBlock(a);
    },
    touchstart: b.touchBlock,
    focusin: b.inputSetup
  }), a.extend(!0, a.event.special, {
    change: {
      handle: function handle(a) {
        return a.isTrigger || b.blockElement != a.target ? (b.requestedChange == a.target && (b.requestedChange = !1), void a.handleObj.handler.apply(this, arguments)) : (b.requestedChange = a.target, b.triggerInput(a), !1);
      }
    },
    input: {
      handle: function () {
        var b,
            c,
            d = function d() {
          c && a(c).off("change", d), b = !1, c = !1;
        },
            e = function e(_e) {
          d(_e), c = _e.target, b = _e.target.value, a(_e.target).on("change", d);
        };

        return function (a) {
          var d;
          if (!a.isTrigger && "range" == a.target.type) if (c != a.target) e(a);else if (c == a.target) {
            if (b == (d = a.target.value)) return !1;
            b = a.target.value;
          }
          a.handleObj.handler.apply(this, arguments);
        };
      }()
    }
  });
});