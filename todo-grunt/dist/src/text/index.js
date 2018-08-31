'use strict';

var Text = function Text() {
  this.data = {
    number: null,
    dato: null
  };

  this.fill = function (info) {
    for (var prop in this.data) {
      if (this.data[prop] !== 'undefined') this.data[prop] = info[prop];
    }
  };

  this.getInformation = function () {
    return this.data;
  };
};

module.exports = function (info) {
  var instance = new Text();

  instance.fill(info);

  return instance;
};
//# sourceMappingURL=index.js.map
