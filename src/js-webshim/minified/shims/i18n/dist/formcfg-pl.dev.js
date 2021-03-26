"use strict";

webshims.validityMessages.pl = {
  typeMismatch: {
    defaultMessage: "Wprowad\u017A poprawn\u0105 warto\u015B\u0107.",
    email: "Wprowad\u017A poprawny adres e-mail.",
    url: "Wprowad\u017A poprawny adres URL."
  },
  badInput: {
    defaultMessage: "Wprowad\u017A poprawn\u0105 warto\u015B\u0107.",
    number: "Wprowad\u017A numer.",
    date: "Wprowad\u017A dat\u0119.",
    time: "Wprowad\u017A czas.",
    range: "Niepoprawny zakres.",
    month: "Wprowad\u017A poprawny miesi\u0105c.",
    "datetime-local": "Wprowad\u017A dat\u0119 i czas."
  },
  rangeUnderflow: {
    defaultMessage: "Warto\u015B\u0107 musi by\u0107 wi\u0119ksza lub r\xF3wna {%min}.",
    date: "Warto\u015B\u0107 musi by\u0107 wi\u0119ksza lub r\xF3wna {%min}.",
    time: "Warto\u015B\u0107 musi by\u0107 wi\u0119ksza lub r\xF3wna {%min}.",
    "datetime-local": "Warto\u015B\u0107 musi by\u0107 wi\u0119ksza lub r\xF3wna {%min}.",
    month: "Warto\u015B\u0107 musi by\u0107 wi\u0119ksza lub r\xF3wna {%min}."
  },
  rangeOverflow: {
    defaultMessage: "Warto\u015B\u0107 musi by\u0107 mniejsza lub r\xF3wna {%max}.",
    date: "Warto\u015B\u0107 musi by\u0107 mniejsza lub r\xF3wna {%max}.",
    time: "Warto\u015B\u0107 musi by\u0107 mniejsza lub r\xF3wna {%max}.",
    "datetime-local": "Warto\u015B\u0107 musi by\u0107 mniejsza lub r\xF3wna {%max}.",
    month: "Warto\u015B\u0107 musi by\u0107 mniejsza lub r\xF3wna {%max}."
  },
  stepMismatch: "Nieprawid\u0142owe dane.",
  tooLong: "Mo\u017Cna wpisa\u0107 maksymalnie {%maxlength} znaki(\xF3w). Wpisano {%valueLen}.",
  patternMismatch: "Niew\u0142a\u015Bciwe dane. {%title}",
  valueMissing: {
    defaultMessage: "Prosz\u0119 wype\u0142ni\u0107 pole.",
    checkbox: "Zaznacz to pole je\u015Bli chcesz przej\u015B\u0107 dalej.",
    select: "Wybierz opcj\u0119..",
    radio: "Zaznacz opcj\u0119."
  }
}, webshims.formcfg.pl = {
  numberFormat: {
    ".": ".",
    ",": ","
  },
  numberSigns: ".-",
  dateSigns: "-",
  timeSigns: ":. ",
  dFormat: "-",
  patterns: {
    d: "yy-mm-dd"
  },
  month: {
    currentText: "Bie\u017C\u0105cy miesi\u0105c"
  },
  week: {
    currentText: "Bie\u017C\u0105cy tydzie\u0144"
  },
  date: {
    closeText: "Ok",
    clear: "Czy\u015B\u0107",
    prevText: "Poprzedni",
    nextText: "Nast\u0119pny",
    currentText: "Dzi\u015B",
    monthNames: ["Stycze\u0144", "Luty", "Marzec", "Kwiece\u0144", "Maj", "Czerwiec", "Lipiec", "Sierpie\u0144", "Wrzesie\u0144", "Pa\u017Adziernik", "Listopad", "Grudzie\u0144"],
    monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa\u017A", "Lis", "Gru"],
    dayNames: ["Niedziela", "Poniedzia\u0142ek", "Wtorek", "\u015Aroda", "Czwartek", "Pi\u0105tek", "Sobota"],
    dayNamesShort: ["Nie", "Pon", "Wto", "\u015Aro", "Czw", "Pi\u0105", "Sob"],
    dayNamesMin: ["Nd", "Pn", "Wt", "\u015Ar", "Cz", "Pt", "So"],
    weekHeader: "Tdz",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !0,
    yearSuffix: ""
  }
};