/* ---- particles.js config ---- */

// Scale the particle system to the device: fewer particles on small screens and
// honour prefers-reduced-motion so we don't burn CPU/GPU on mobile or for users
// who opt out of animation.
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
const isSmallScreen = window.innerWidth < 768;
const particleCount = prefersReducedMotion ? 0 : isSmallScreen ? 40 : 140;

particlesJS("particles-js", {
  particles: {
    number: {
      value: particleCount,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#fff",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
        width: 100,
        height: 100,
      },
    },

    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 10,
        sync: false,
      },
    },
    line_linked: {
      enable: !isSmallScreen,
      distance: 150,
      color: "#808080",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 70,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: !isSmallScreen,
});
const allElements = document.querySelectorAll(".animated-text");

// It checks if there is at least one element
if (allElements.length > 0) {
  //It runs the script for each found element
  allElements.forEach((element) => {
    const txtElement = element,
      wordsList = txtElement.getAttribute("data-words");

    // Skip elements that don't declare any words to type.
    if (!wordsList) return;

    const words = wordsList.split(", "); // It makes an array of words from data attribute

    let wordsCount = 0;

    entry();

    // Initial function
    function entry() {
      if (wordsCount < words.length) {
        // It runs the code for each word
        let word = words[wordsCount],
          txtArr = word.split(""), // It makes an array of letters in the word
          count = 0;

        txtElement.textContent = ""; // It removes the previous text from the element

        // For each letter in the array
        txtArr.forEach((letter) => {
          // It replaces the empty space for the "non-break-space" HTML...
          // ... This is needed to separate the words properly
          let _letter = letter === " " ? "&nbsp;" : letter;

          // It wraps every letter with a "span" and puts all they back to the element
          txtElement.innerHTML += `<span>${_letter}</span>`;
        });

        let spans = txtElement.childNodes;

        // It sets the interval between each letter showing (increased from 70ms to 100ms for slower typing)
        const letterInterval = setInterval(activeLetter, 100);

        function activeLetter() {
          spans[count].classList.add("active");
          count++;

          if (count === spans.length) {
            clearInterval(letterInterval);

            // It waits before starting to erase the word (increased from 600ms to 1500ms)
            setTimeout(() => {
              eraseText();
            }, 1500);
          }
        }

        function eraseText() {
          // It sets the interval between each letter hiding (increased from 40ms to 60ms)
          let removeInterval = setInterval(removeLetter, 60);
          count--;

          function removeLetter() {
            spans[count].classList.remove("active");
            count--;

            if (count === -1) {
              clearInterval(removeInterval);
              wordsCount++;

              // After removing the last letter, call the initial function again
              entry();
            }
          }
        }
      } else {
        // If the code reaches the last word
        // It resets the words counter...
        wordsCount = 0;
        // ...and calls the initial function again.
        entry();
      }
    }
  });
}
