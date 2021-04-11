"use strict";

webshims.validityMessages["zh-TW"] = {
  typeMismatch: {
    defaultMessage: "\u8ACB\u8F38\u5165\u4E00\u500B\u6B63\u78BA\u7684\u503C\u3002",
    email: "\u8ACB\u8F38\u5165\u4E00\u500B\u96FB\u5B50\u90F5\u4EF6\u5730\u5740\u3002",
    url: "\u8ACB\u8F38\u5165\u4E00\u500B\u7DB2\u5740\u3002"
  },
  badInput: {
    defaultMessage: "\u8ACB\u8F38\u5165\u4E00\u500B\u6B63\u78BA\u7684\u503C\u3002",
    number: "\u8ACB\u8F38\u5165\u4E00\u500B\u6578\u5B57\u3002",
    date: "\u8ACB\u8F38\u5165\u4E00\u500B\u65E5\u671F\u3002",
    time: "\u8ACB\u8F38\u5165\u4E00\u500B\u6642\u9593\u3002",
    range: "\u7121\u6548\u7684\u503C\u3002",
    month: "\u8ACB\u8F38\u5165\u4E00\u500B\u6B63\u78BA\u7684\u503C\u3002",
    "datetime-local": "\u8ACB\u8F38\u5165\u4E00\u500B\u6B63\u78BA\u7684\u65E5\u671F\u548C\u6642\u9593\u3002"
  },
  rangeUnderflow: {
    defaultMessage: "\u8F38\u5165\u7684\u503C\u5FC5\u9700\u5927\u904E\u6216\u7B49\u65BC {%min}\u3002",
    date: "\u8F38\u5165\u7684\u503C\u5FC5\u9700\u5728 {%min} \u6216\u4E4B\u5F8C\u3002",
    time: "\u8F38\u5165\u7684\u503C\u5FC5\u9700\u5728 {%min} \u6216\u4E4B\u5F8C\u3002",
    "datetime-local": "\u8F38\u5165\u7684\u503C\u5FC5\u9700\u5728 {%min} \u6216\u4E4B\u5F8C\u3002",
    month: "\u8F38\u5165\u7684\u503C\u5FC5\u9700\u5728 {%min} \u6216\u4E4B\u5F8C\u3002"
  },
  rangeOverflow: {
    defaultMessage: "\u8F38\u5165\u7684\u503C\u5FC5\u9700\u5C0F\u904E\u6216\u7B49\u65BC {%max}\u3002",
    date: "\u8F38\u5165\u7684\u503C\u5FC5\u9700\u5728 {%max} \u6216\u4E4B\u524D\u3002",
    time: "\u8F38\u5165\u7684\u503C\u5FC5\u9700\u5728 {%max} \u6216\u4E4B\u524D\u3002",
    "datetime-local": "\u8F38\u5165\u7684\u503C\u5FC5\u9700\u5728 {%max} \u6216\u4E4B\u524D\u3002",
    month: "\u8F38\u5165\u7684\u503C\u5FC5\u9700\u5728 {%max} \u6216\u4E4B\u524D\u3002"
  },
  stepMismatch: "\u7121\u6548\u7684\u8F38\u5165\u3002",
  tooLong: "\u8ACB\u8F38\u5165 {%maxlength} \u5B57\u5143\u6216\u66F4\u5C0F\u3002\u4F60\u8F38\u5165\u4E86 {%valueLen} \u5B57\u5143\u3002",
  tooShort: "\u8ACB\u8F38\u5165 {%minlength} \u5B57\u5143\u6216\u66F4\u591A\u3002\u4F60\u8F38\u5165\u4E86 {%valueLen} \u5B57\u5143\u3002",
  patternMismatch: "\u7121\u6548\u7684\u8F38\u5165\u3002{%title}",
  valueMissing: {
    defaultMessage: "\u8ACB\u586B\u5BEB\u6B64\u6B04\u4F4D\u3002",
    checkbox: "\u8ACB\u6838\u53D6\u6B64\u65B9\u584A\u4EE5\u7E7C\u7E8C\u3002",
    select: "\u8ACB\u9078\u53D6\u4E00\u500B\u9078\u64C7\u3002",
    radio: "\u8ACB\u9078\u53D6\u4E00\u500B\u9078\u64C7\u3002"
  }
}, webshims.formcfg["zh-TW"] = {
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
  meridian: ["\u4E0A\u5348", "\u4E0B\u5348"],
  month: {
    currentText: "\u672C\u6708"
  },
  time: {
    currentText: "\u73FE\u5728"
  },
  date: {
    closeText: "\u5B8C\u6210",
    clear: "\u6E05\u9664",
    prevText: "\u4E0A",
    nextText: "\u4E0B",
    currentText: "\u4ECA\u65E5",
    monthNames: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
    monthNamesShort: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
    dayNames: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"],
    dayNamesShort: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"],
    dayNamesMin: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
    weekHeader: "\u9031",
    firstDay: 0,
    isRTL: !1,
    showMonthAfterYear: !0,
    yearSuffix: "\u5E74"
  }
};