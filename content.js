(function() {
  function playSound() {
    const audio = new Audio(browser.runtime.getURL("Assets/1.mp3"));
    audio.play().catch((e) => {
      console.error(e);
    });
  }

  window.addEventListener("keydown", function(event) {
    if (event.altKey && event.shiftKey) {
      event.preventDefault();
      event.stopPropagation();
      playSound();
    }
  }, true);

})();

// Created By TheNima
