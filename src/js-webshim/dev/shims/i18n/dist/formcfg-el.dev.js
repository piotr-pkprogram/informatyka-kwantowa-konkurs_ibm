"use strict";

webshims.validityMessages.el = {
  "typeMismatch": {
    "email": "Παρακαλώ εισάγετε μια διεύθυνση email.",
    "url": "Παρακαλώ εισάγετε ένα URL."
  },
  "badInput": {
    "number": "Μη έγκυρη τιμή.",
    "date": "Μη έγκυρη τιμή.",
    "time": "Μη έγκυρη τιμή.",
    "range": "Μη έγκυρη τιμή.",
    "datetime-local": "Μη έγκυρη τιμή."
  },
  "tooLong": "Μη έγκυρη τιμή.",
  "patternMismatch": "Αντιστοιχίστε τη ζητούμενη μορφή. {%title}.",
  "valueMissing": {
    "defaultMessage": "Παρακαλώ συμπληρώστε αυτό το πεδίο.",
    "checkbox": "Παρακαλώ επιλέξτε αυτό το κουτί αν θέλετε να συνεχίσετε.",
    "select": "Παρακαλώ επιλέξτε ένα αντικείμενο στη λίστα.",
    "radio": "Επιλέξτε ένα από τα παρακάτω."
  },
  "rangeUnderflow": {
    "defaultMessage": "Η τιμή πρέπει να είναι μεγαλύτερη ή ίση του {%min}.",
    "date": "Η τιμή πρέπει να είναι μεγαλύτερη ή ίση του {%min}.",
    "time": "Η τιμή πρέπει να είναι μεγαλύτερη ή ίση του {%min}.",
    "datetime-local": "Η τιμή πρέπει να είναι μεγαλύτερη ή ίση του {%min}."
  },
  "rangeOverflow": {
    "defaultMessage": "Η τιμή πρέπει να είναι μικρότερη ή ίση του {%max}.",
    "date": "Η τιμή πρέπει να είναι μικρότερη ή ίση του {%max}.",
    "time": "Η τιμή πρέπει να είναι μικρότερη ή ίση του {%max}.",
    "datetime-local": "Η τιμή πρέπει να είναι μικρότερη ή ίση του {%max}."
  },
  "stepMismatch": "Μη έγκυρη τιμή."
};
webshims.formcfg.el = {
  numberFormat: {
    ".": ".",
    ",": ","
  },
  numberSigns: '.',
  dateSigns: '/',
  timeSigns: ":. ",
  dFormat: "/",
  patterns: {
    d: "dd/mm/yy"
  },
  date: {
    closeText: 'Κλείσιμο',
    prevText: 'Προηγούμενος',
    nextText: 'Επόμενος',
    currentText: 'Τρέχων Μήνας',
    monthNames: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
    monthNamesShort: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαι', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
    dayNames: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
    dayNamesShort: ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'],
    dayNamesMin: ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα'],
    weekHeader: 'Εβδ',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  }
};