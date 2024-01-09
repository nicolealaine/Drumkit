document.addEventListener("DOMContentLoaded", function (event) {
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

  function addPlaying(button) {
    button.classList.add("playing");
  }

  function removePlaying(button) {
    button.classList.remove("playing");
  }

  function fireKey(keyCode) {
    switch (keyCode) {
      case "a":
        clap.currentTime = 0;
        clap.play();
        break;
      case "s":
        hiHat.currentTime = 0;
        hiHat.play();
        break;
      case "d":
        kick.currentTime = 0;
        kick.play();
        break;
      case "f":
        openHat.currentTime = 0;
        openHat.play();
        break;
      case "g":
        boom.currentTime = 0;
        boom.play();
        break;
      case "h":
        ride.currentTime = 0;
        ride.play();
        break;
      case "j":
        snare.currentTime = 0;
        snare.play();
        break;
      case "k":
        tom.currentTime = 0;
        tom.play();
        break;
      case "l":
        tink.currentTime = 0;
        tink.play();
        break;
    }
  }

  keys.forEach((key) => {
    key.addEventListener("click", function (e) {
      const keyCode = key.dataset.key;
      const button = document.querySelector(`[data-key="${keyCode}"]`);
      fireKey(keyCode);
      addPlaying(button);
    });
  });

  window.addEventListener("keydown", function (e) {
    const keyCode = e.key;
    const button = document.querySelector(`[data-key="${keyCode}"]`);
    fireKey(keyCode);
    addPlaying(button);
  });

  keys.forEach((key) => {
    key.addEventListener("transitionend", () => {
      const keyCode = key.dataset.key;
      const button = document.querySelector(`[data-key="${keyCode}"]`);
      removePlaying(button);
    });
  });
});
