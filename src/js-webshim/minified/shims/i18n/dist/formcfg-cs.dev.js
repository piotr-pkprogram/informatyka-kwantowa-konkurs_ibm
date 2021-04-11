"use strict";

webshims.validityMessages.cs = {
  typeMismatch: {
    defaultMessage: "Pros\xEDm vlo\u017Ete platnou hodnotu.",
    email: "Pros\xEDm vlo\u017Ete emailovou adresu.",
    url: "Pros\xEDm vlo\u017Ete URL."
  },
  badInput: {
    defaultMessage: "Pros\xEDm vlo\u017Ete platnou hodnotu.",
    number: "Pros\xEDm vlo\u017Ete \u010D\xEDslo.",
    date: "Pros\xEDm vlo\u017Ete datum.",
    time: "Pros\xEDm vlo\u017Ete \u010Das.",
    range: "Neplatn\xe1 vstupn\xed hodnota.",
    month: "Pros\xEDm vlo\u017Ete platnou hodnotu.",
    "datetime-local": "Pros\xEDm vlo\u017Ete datum a \u010Das."
  },
  rangeUnderflow: {
    defaultMessage: "Hodnota mus\xED b\xFDt v\u011Bt\u0161\xED nebo rovna {%min}.",
    date: "Datum mus\xed b\xfdt od {%min}.",
    time: "\u010Cas mus\xED b\xFDt od {%min}.",
    "datetime-local": "Datum a \u010Das mus\xED b\xFDt od {%min}.",
    month: "M\u011Bs\xEDc mus\xED b\xFDt od {%min}."
  },
  rangeOverflow: {
    defaultMessage: "Hodnota mus\xED b\xFDt v\u011Bt\u0161\xED nebo rovna {%mas}.",
    date: "Datum mus\xed b\xfdt od {%mas}.",
    time: "\u010Cas mus\xED b\xFDt od {%mas}.",
    "datetime-local": "Datum a \u010Das mus\xED b\xFDt od {%mas}.",
    month: "M\u011Bs\xEDc mus\xED b\xFDt od {%mas}."
  },
  stepMismatch: "Neplatn\xe1 vstupn\xed hodnota.",
  tooLong: "Maxim\xE1ln\u011B m\u016F\u017Eete vlo\u017Eit {%maxlength} znak\u016F. Zadali jste {%valueLen}.",
  patternMismatch: "Neplatn\xe1 vstupn\xed hodnota. {%title}",
  valueMissing: {
    defaultMessage: "Pros\xEDm vypl\u0148te toto pole",
    checkbox: "Pros\xEDm za\u0161krtn\u011Bte toto pol\xED\u010Dko, pokud chcete pokra\u010Dovat.",
    select: "Pros\xEDm zvolte mo\u017Enost.",
    radio: "Pros\xEDm zvolte mo\u017Enost."
  }
}, webshims.formcfg.cs = {
  numberFormat: {
    ".": ",",
    ",": " "
  },
  numberSigns: ".-",
  dateSigns: ".",
  timeSigns: ":. ",
  dFormat: ".",
  patterns: {
    d: "dd.mm.yy"
  },
  month: {
    currentText: "Tento m\u011Bs\xEDc"
  },
  week: {
    currentText: "Tento t\xfdden"
  },
  time: {
    currentText: "Nyn\xed"
  },
  date: {
    closeText: "Hotovo",
    clear: "Smazat",
    prevText: "P\u0159edchoz\xED",
    nextText: "Dal\u0161\xED",
    currentText: "Dne\u0161ek",
    monthNames: ["Leden", "\xdanor", "B\u0159ezen", "Duben", "Kv\u011Bten", "\u010Cerven", "\u010Cervenec", "Srpen", "Z\xE1\u0159\xED", "\u0158\xEDjen", "Listopad", "Prosinec"],
    monthNamesShort: ["Led", "\xdan", "B\u0159e", "Dub", "Kv\u011B", "\u010Cer", "\u010Cec", "Srp", "Z\xE1\u0159", "\u0158\xEDj", "Lis", "Pro"],
    dayNames: ["Ned\u011Ble", "Pond\u011Bl\xED", "\xdater\xfd", "St\u0159eda", "\u010Ctvrtek", "P\xe1tek", "Sobota"],
    dayNamesShort: ["NE", "PO", "\xdaT", "ST", "\u010CT", "P\xc1", "SO"],
    dayNamesMin: ["NE", "PO", "\xdaT", "ST", "\u010CT", "P\xc1", "SO"],
    weekHeader: "T\xfdden",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ""
  }
};