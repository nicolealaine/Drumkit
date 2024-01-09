document.addEventListener("DOMContentLoaded", function (event) {
  class DrumKit {
    constructor(button) {
      this.button = button;
    }
    getPiece(keyCode) {
      switch (keyCode) {
        case "a":
          this.piece = clap;
          break;
        case "s":
          this.piece = hiHat;
          break;
        case "d":
          this.piece = kick;
          break;
        case "f":
          this.piece = openHat;
          break;
        case "g":
          this.piece = boom;
          break;
        case "h":
          this.piece = ride;
          break;
        case "j":
          this.piece = snare;
          break;
        case "k":
          this.piece = tom;
          break;
        case "l":
          this.piece = tink;
          break;
        default:
          break;
      }
    }

    playSound() {
      this.piece.currentTime = 0;
      this.piece.play();
    }

    startAnimation(button) {
      this.button = button;
      this.button.classList.add("playing");
    }
    endAnimation(button) {
      this.button = button;
      this.button.classList.remove("playing");
    }
  }

  const boom = new Audio("sounds/boom.wav");
  const clap = new Audio("sounds/clap.wav");
  const hiHat = new Audio("sounds/hihat.wav");
  const kick = new Audio("sounds/kick.wav");
  const openHat = new Audio("sounds/openhat.wav");
  const ride = new Audio("sounds/ride.wav");
  const snare = new Audio("sounds/snare.wav");
  const tink = new Audio("sounds/tink.wav");
  const tom = new Audio("sounds/tom.wav");
  const keys = document.querySelectorAll(".key");
  const goodKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

  const drumkit = new DrumKit();

  window.addEventListener("keydown", function (e) {
    let keyCode = e.key;
    keyCode = keyCode.toLowerCase();
    const button = document.querySelector(`[data-key="${keyCode}"]`);
    if (goodKeys.includes(keyCode)) {
      drumkit.getPiece(keyCode);
      drumkit.playSound();
      drumkit.startAnimation(button);
    }
  });

  keys.forEach((key) => {
    key.addEventListener("click", function (e) {
      const keyCode = key.dataset.key;
      const button = document.querySelector(`[data-key="${keyCode}"]`);
      drumkit.getPiece(keyCode);
      drumkit.playSound();
      drumkit.startAnimation(button);
    });
  });

  keys.forEach((key) => {
    key.addEventListener("transitionend", () => {
      const keyCode = key.dataset.key;
      const button = document.querySelector(`[data-key="${keyCode}"]`);
      drumkit.endAnimation(button);
    });
  });
});
