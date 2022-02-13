"use strict";

const back = function () {
  let audio = new Audio("./sounds/click2edit.wav");
  audio.play();
  setTimeout(function () {
    if (localStorage.getItem("continue") == "false") {
      location.href = "index.html";
    } else {
      location.href = "continue.html";
    }

    /*  localStorage.getItem("continue") == false
    ? (location.href = "index.html")
    : (location.href = "continue.html"); */
  }, 0.2 * 1000);
};
