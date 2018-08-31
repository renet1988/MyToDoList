'use strict';

let Text = function () {
  this.data = {
    number: null,
    dato: null
  };

  this.fill = function (info) {
    for (let prop in this.data) {
      if (this.data[prop] !== 'undefined') this.data[prop] = info[prop];
    }
  };

  this.getInformation = function () {
    return this.data;
  };
};

module.exports = function (info) {
  let instance = new Text();

  instance.fill(info);

  return instance;
};
//# sourceMappingURL=index.js.map
