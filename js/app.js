/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles-js config loaded');
});

particlesJS("particles-js", {
  particles: {

    number: {
      value: 50
    },

    color: {
      value: "#8cff00"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.4
    },

    size: {
      value: 2
    },

    line_linked: {
      enable: true,
      distance: 120,
      color: "#8cff00",
      opacity: 0.2,
      width: 1
    },

    move: {
      enable: true,
      speed: 2
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },

      resize: true
    }
  },

  retina_detect: true
});