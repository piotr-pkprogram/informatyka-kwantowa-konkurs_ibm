"use strict";

webshims.validityMessages["zh-CN"] = {
  typeMismatch: {
    email: "\u8BF7\u8F93\u5165\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u3002",
    url: "\u8BF7\u8F93\u5165\u4E00\u4E2A URL\u3002"
  },
  badInput: {
    number: "\u503C\u65E0\u6548\u3002",
    date: "\u503C\u65E0\u6548\u3002",
    time: "\u503C\u65E0\u6548\u3002",
    range: "\u503C\u65E0\u6548\u3002",
    "datetime-local": "\u503C\u65E0\u6548\u3002"
  },
  tooLong: "\u503C\u65E0\u6548\u3002",
  patternMismatch: "\u8BF7\u5339\u914D\u8981\u6C42\u7684\u683C\u5F0F\uFF1A {%title}\u3002",
  valueMissing: {
    defaultMessage: "\u8BF7\u586B\u5199\u6B64\u5B57\u6BB5\u3002",
    checkbox: "\u82E5\u8981\u7EE7\u7EED\uFF0C\u8BF7\u68C0\u9009\u6B64\u68C0\u67E5\u6846\u3002",
    select: "\u8BF7\u9009\u62E9\u5217\u8868\u4E2D\u7684\u4E00\u9879\u3002",
    radio: "\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879\u3002"
  },
  rangeUnderflow: {
    defaultMessage: "\u503C\u65E0\u6548\u3002",
    date: "\u503C\u65E0\u6548\u3002",
    time: "\u503C\u65E0\u6548\u3002",
    "datetime-local": "\u503C\u65E0\u6548\u3002"
  },
  rangeOverflow: {
    defaultMessage: "\u503C\u65E0\u6548\u3002",
    date: "\u503C\u65E0\u6548\u3002",
    time: "\u503C\u65E0\u6548\u3002",
    "datetime-local": "\u503C\u65E0\u6548\u3002"
  },
  stepMismatch: "\u503C\u65E0\u6548\u3002"
}, webshims.formcfg["zh-CN"] = {
  numberFormat: {
    ".": ".",
    ",": ","
  },
  numberSigns: ".",
  dateSigns: "-",
  timeSigns: ":. ",
  dFormat: "-",
  patterns: {
    d: "yy-mm-dd"
  },
  date: {
    closeText: "\u5173\u95ED",
    prevText: "&#x3C;\u4E0A\u6708",
    nextText: "\u4E0B\u6708&#x3E;",
    currentText: "\u4ECA\u5929",
    monthNames: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
    monthNamesShort: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
    dayNames: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"],
    dayNamesShort: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"],
    dayNamesMin: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
    weekHeader: "\u5468",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !0,
    yearSuffix: "\u5E74"
  }
};