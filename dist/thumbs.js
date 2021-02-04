"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var a = document.querySelectorAll(".thumbs-rating-up");
var b = document.querySelectorAll(".thumbs-rating-down");

function addEvent(item) {
  var test = document.querySelectorAll(".thumbs-rating-voted");

  if (test.length > 0) {
    var voted = item.parentElement.querySelector(".thumbs-rating-already-voted");
    voted.classList.add("thumbs-rating-show");
    setTimeout(function () {
      return voted.style.opacity = "0";
    }, 2000);
    setTimeout(function () {
      voted.classList.remove("thumbs-rating-show");
      voted.style.opacity = "1";
    }, 2600);
  } else {
    item.classList.add("thumbs-rating-voted");
  }
}

if (a.length > 0) {
  var _iterator = _createForOfIteratorHelper(a),
      _step;

  try {
    var _loop = function _loop() {
      var item = _step.value;
      item.addEventListener("click", function () {
        return addEvent(item);
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

if (b.length > 0) {
  var _iterator2 = _createForOfIteratorHelper(b),
      _step2;

  try {
    var _loop2 = function _loop2() {
      var item = _step2.value;
      item.addEventListener("click", function () {
        return addEvent(item);
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
//# sourceMappingURL=thumbs.js.map