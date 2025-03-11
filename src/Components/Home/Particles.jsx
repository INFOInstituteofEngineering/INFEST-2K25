import React, { useEffect } from 'react';

const ParticleComponent = () => {
  useEffect(() => {
    const loadScripts = () => {
      // Load particles.js script dynamically
      const particlesScript = document.createElement('script');
      particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      particlesScript.async = true;
      particlesScript.onload = initializeParticles; // Call initializeParticles when particles.js is loaded
      document.body.appendChild(particlesScript);

      // Load stats.js script dynamically
      const statsScript = document.createElement('script');
      statsScript.src = 'https://threejs.org/examples/js/libs/stats.min.js';
      statsScript.async = true;
      document.body.appendChild(statsScript);
    };

    const initializeParticles = () => {
      // Initialize Particle.js with new configuration
      window.particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 28,
            "density": {
              "enable": true,
              "value_area": 1182.5549493866476
            }
          },
          "color": {
            "value": "#89CFF0"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000"
            },
            "polygon": {
              "nb_sides": 6
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 244,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 40,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 1,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": false
      });
    };

    loadScripts(); // Call the function to load scripts when the component mounts

    // Clean up function
    return () => {
      // Remove particles-js and stats-js scripts from the document when the component unmounts
      const particlesScript = document.querySelector('script[src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"]');
      const statsScript = document.querySelector('script[src="https://threejs.org/examples/js/libs/stats.min.js"]');
      particlesScript && particlesScript.remove();
      statsScript && statsScript.remove();
    };
  }, []);

  return (
    <div id="particles-js" className="absolute inset-0"></div>
  );
};

export default ParticleComponent;
