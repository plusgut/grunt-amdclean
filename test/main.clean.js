;(function() {
var _View, _Controller, _App, _View_, _Controller_, _App_;
_View = function (exports) {
  'use strict';
  var View = function (element) {
    this.element = element;
  };
  View.prototype.show = function () {
    this.element.style.display = 'block';
  };
  View.prototype.hide = function () {
    this.element.style.display = 'none';
  };
  return View;
}();
_Controller = function (exports) {
  'use strict';
  var View = _View;
  var Controller = function () {
    this.view = new View(document.body);
  };
  return Controller;
}(_View);
_App = function (exports) {
  'use strict';
  var Controller = _Controller;
  var App = function () {
    this.controller = new Controller();
  };
  return App;
}(_Controller);
(function (App) {
  'use strict';
  new App();
}(_App));
}());