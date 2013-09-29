(function() {
  var $, ImgAnalyzer;

  $ = require('cheerio');

  ImgAnalyzer = (function() {
    ImgAnalyzer.prototype.output = [];

    function ImgAnalyzer() {}

    ImgAnalyzer.prototype.init = function() {
      console.log("\n\n");
      console.log("IMAGE ANALYZER");
      return console.log("=========================");
    };

    ImgAnalyzer.prototype.analyzeLine = function(lineNum, lineContent) {
      var $lineContent, altIndex, imgIndex;
      lineContent = lineContent.trim();
      $lineContent = $(lineContent);
      imgIndex = lineContent.indexOf('img');
      if (imgIndex > -1) {
        altIndex = lineContent.indexOf('alt');
        if (altIndex === -1) {
          return this.output.push(this.printAltError(lineNum, lineContent));
        } else {
          if ($lineContent.attr('alt') === '') {
            return this.output.push(this.printAltWarning(lineNum, altIndex, lineContent));
          }
        }
      }
    };

    ImgAnalyzer.prototype.parseComplete = function() {
      this.init();
      return this.output.forEach(function(msg) {
        return console.error(msg);
      });
    };

    ImgAnalyzer.prototype.printAltError = function(lineNum, lineContent) {
      return new Error("alt missing, line " + lineNum + ": " + lineContent);
    };

    ImgAnalyzer.prototype.printAltWarning = function(lineNum, altIndex, lineContent) {
      return "[Warning: empty alt, line " + lineNum + " char " + altIndex + ": " + lineContent + "]";
    };

    return ImgAnalyzer;

  })();

  exports.ImgAnalyzer = ImgAnalyzer;

}).call(this);
