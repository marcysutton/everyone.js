(function() {
  var FileLoaderUtility, fs, lazy;

  fs = require('fs');

  lazy = require("lazy");

  require('events').EventEmitter;

  FileLoaderUtility = (function() {
    FileLoaderUtility.prototype.fileInputArr = [];

    FileLoaderUtility.prototype.tasks = [];

    function FileLoaderUtility(file, tasks) {
      var lineCounter, self;
      self = this;
      this.tasks = tasks;
      lineCounter = 1;
      new lazy(fs.createReadStream(file)).on('end', function() {
        return self.parseComplete();
      }).lines.forEach(function(line) {
        self.tasks.forEach(function(task) {
          return task.analyzeLine(lineCounter, line.toString());
        });
        return lineCounter++;
      });
    }

    FileLoaderUtility.prototype.parseComplete = function() {
      return this.tasks.forEach(function(task) {
        return task.parseComplete();
      });
    };

    return FileLoaderUtility;

  })();

  exports.FileLoaderUtility = FileLoaderUtility;

}).call(this);
