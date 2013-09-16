var addError, addWarning, config, kickoff;

config = {
  warningColor: 'orange',
  errorColor: 'red'
};

kickoff = function() {
  var altAttr, image, images, numImages, _i, _len, _results;
  images = document.querySelectorAll('img');
  numImages = images.length;
  _results = [];
  for (_i = 0, _len = images.length; _i < _len; _i++) {
    image = images[_i];
    altAttr = image.getAttribute('alt');
    if (altAttr === '') {
      addWarning(image);
    }
    if (altAttr === null) {
      _results.push(addError(image));
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

addWarning = function(targetElement) {
  return targetElement.style.border = '10px solid ' + config.warningColor;
};

addError = function(targetElement) {
  return targetElement.style.border = '10px solid ' + config.errorColor;
};

if (window.addEventListener) {
  window.addEventListener("DOMContentLoaded", kickoff, false);
}
