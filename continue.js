"use strict";
localStorage.setItem("continue", "true");

/* const newGame = function () {
  localStorage.setItem("refreshBoard", "yes");
}; */

/* const continueGame = function () {
  localStorage.setItem("refreshBoard", "no");
  location.href = "game/game.html";
}; */

const continueGame = function (evt) {
  let audio = new Audio("./sounds/click2edit.wav");
  audio.play();
  const menuTarget = evt.target.id;
  console.log(menuTarget);
  setTimeout(function () {
    switch (menuTarget) {
      case "New-Game":
        localStorage.setItem("refreshBoard", "yes");
        location.href = "newGame.html";
        break;
      case "Continue":
        localStorage.setItem("refreshBoard", "no");
        location.href = "game/game.html";
        break;
      case "Instructions":
        location.href = "instructions.html";
        break;
      case "Credits":
        location.href = "Credits.html";
        break;
    }
  }, 0.2 * 1000);
};
