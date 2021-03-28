"use strict";

webshims.validityMessages.ja = {
  typeMismatch: {
    email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002",
    url: "URL \u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002"
  },
  badInput: {
    number: "\u5024\u304C\u7121\u52B9\u3067\u3059\u3002",
    date: "\u5024\u304C\u7121\u52B9\u3067\u3059\u3002",
    time: "\u5024\u304C\u7121\u52B9\u3067\u3059\u3002",
    range: "\u5024\u304C\u7121\u52B9\u3067\u3059\u3002",
    "datetime-local": "\u5024\u304C\u7121\u52B9\u3067\u3059\u3002"
  },
  tooLong: "\u5024\u304C\u7121\u52B9\u3067\u3059\u3002",
  patternMismatch: "\u5165\u529B\u3055\u308C\u305F\u5024\u304C\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u6307\u5B9A\u3055\u308C\u305F\u66F8\u5F0F\u3068\u7570\u306A\u308A\u307E\u3059: {%title}",
  valueMissing: {
    defaultMessage: "\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u5165\u529B\u5FC5\u9808\u3067\u3059\u3002",
    checkbox: "\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u306B\u30C1\u30A7\u30C3\u30AF\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044\u3002",
    select: "\u30EA\u30B9\u30C8\u304B\u3089\u9805\u76EE\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    radio: "\u3044\u305A\u308C\u304B\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
  },
  rangeUnderflow: {
    defaultMessage: "\u5024\u306F {%min} \u4EE5\u4E0A\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
    date: "\u5024\u306F {%min} \u4EE5\u4E0A\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
    time: "\u5024\u306F {%min} \u4EE5\u4E0A\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
    "datetime-local": "\u5024\u306F {%min} \u4EE5\u4E0A\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"
  },
  rangeOverflow: {
    defaultMessage: "\u5024\u306F {%max} \u4EE5\u4E0B\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
    date: "\u5024\u306F {%max} \u4EE5\u4E0B\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
    time: "\u5024\u306F {%max} \u4EE5\u4E0B\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",
    "datetime-local": "\u5024\u306F {%max} \u4EE5\u4E0B\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"
  },
  stepMismatch: "\u5024\u304C\u7121\u52B9\u3067\u3059\u3002"
}, webshims.formcfg.ja = {
  numberFormat: {
    ".": ".",
    ",": ","
  },
  numberSigns: ".",
  dateSigns: "/",
  timeSigns: ":. ",
  dFormat: "/",
  patterns: {
    d: "yy/mm/dd"
  },
  date: {
    closeText: "\u9589\u3058\u308B",
    prevText: "&#x3C;\u524D",
    nextText: "\u6B21&#x3E;",
    currentText: "\u4ECA\u65E5",
    monthNames: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
    monthNamesShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
    dayNames: ["\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"],
    dayNamesShort: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
    dayNamesMin: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
    weekHeader: "\u9031",
    firstDay: 0,
    isRTL: !1,
    showMonthAfterYear: !0,
    yearSuffix: "\u5E74"
  }
};