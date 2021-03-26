"use strict";

$(document).ready(function () {
  Modernizr.load({
    test: Modernizr.inputtypes.color,
    nope: "jscolor.min.js"
  });
  $("#myform").submit(function (e) {
    var searchedValue = $("input[name='searchedValue']").attr("value");
    if (searchedValue) window.location.href = "http://www.google.pl/#hl=plf&output=search&q=site:videokurs.pl " + searchedValue;else alert("empty string");
    e.preventDefault();
  });
  $("#rangeTest").change(function () {
    $("#valueFromRange").attr("value", $(this).attr("value"));
  });
  $.webshims.setOptions("waitReady", false);
  $.webshims.polyfill();
});