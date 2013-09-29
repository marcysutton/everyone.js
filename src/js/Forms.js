(function() {
  var $, InputAnalyzer;

  $ = require('cheerio');

  InputAnalyzer = (function() {
    function InputAnalyzer() {}

    InputAnalyzer.prototype.init = function() {
      console.log("\n\n");
      console.log("INPUT ANALYZER");
      return console.log("=========================");
    };

    InputAnalyzer.prototype.analyzeLine = function(lineNum, lineContent) {
      var $lineContent, inputIndex;
      lineContent = lineContent.trim();
      $lineContent = $(lineContent);
      inputIndex = lineContent.indexOf('input');
      if (inputIndex > -1) {
        return console.log('input');
      }
    };

    InputAnalyzer.prototype.parseComplete = function() {};

    InputAnalyzer.prototype.printLabelError = function(lineNum, lineContent) {
      return console.error(new Error("label missing, line " + lineNum + ": " + lineContent));
    };

    return InputAnalyzer;

  })();

  exports.InputAnalyzer = InputAnalyzer;

}).call(this);
