"use strict";

if (localStorage.getItem("topCollapsed") === "true") {
  var a = document.querySelector(".header__container");
  a.classList.add("collapsed");
  var p = document.querySelector(".header__top");
  p.classList.add("release");
  var o = ["", "one", "two"];
  var r = Math.floor(Math.random() * (3 - 0)) + 0;
  p.classList.add("".concat(o[r]));
}
//# sourceMappingURL=localStorage.js.map