"use strict";
localStorage.clear();
localStorage.setItem("refreshBoard", "yes");
localStorage.setItem("continue", "false");

/* const onePlayer = function () {
  localStorage.setItem("gameType", "onePlayer");
};

const twoPlayer = function () {
  localStorage.setItem("gameType", "twoPlayer");
}; */

const roundsFunc = function () {
  let i = 0;
  localStorage.setItem("maxRounds", "1");
  return function (evt) {
    let audio = new Audio("./sounds/click2edit.wav");
    audio.play();
    const arrow = evt.target;
    console.log("clicked!!!");
    console.log(evt.target);
    const totalRounds = [1, 3, 5, 7];

    /* if (evt.target.className.includes("up")) { */
    if (arrow.className.includes("up")) {
      arrow.src = "/imgs/upArrow_selected.png";
      setTimeout(function () {
        arrow.src = "/imgs/upArrow_unselected.png";
      }, 0.2 * 1000);
      if (i < totalRounds.length - 1) {
        i++;
      }
    } else {
      if (i > 0) {
        arrow.src = "/imgs/downArrow_selected.png";
        setTimeout(function () {
          arrow.src = "/imgs/downArrow_unselected.png";
        }, 0.2 * 1000);

        i--;
      }
    }
    console.log(i);
    document.querySelector(".round-no").textContent = `${totalRounds[i]}`;
    localStorage.setItem("maxRounds", totalRounds[i]);
  };
};

const rounds = roundsFunc();

document.querySelectorAll(".arrow").forEach((item) => {
  item.addEventListener("click", rounds);
});

const newGame = function (evt) {
  let audio = new Audio("./sounds/click2edit.wav");
  audio.play();
  const menuTarget = evt.target.id;

  /* if (menuTarget == "1-Player") {
    localStorage.setItem("gameType", "onePlayer");
  } else if(menuTarget == "1-Player"){
    localStorage.setItem("gameType", "twoPlayer");
  } */

  console.log(menuTarget);
  setTimeout(function () {
    switch (menuTarget) {
      case "1-Player":
        localStorage.setItem("gameType", "onePlayer");
        location.href = "difficulty1.html";
        break;
      case "2-Player":
        localStorage.setItem("gameType", "twoPlayer");
        location.href = "game/game.html";
        break;
      case "back-to-main":
        location.href = "index.html";
        break;
    }
  }, 0.2 * 1000);
};
