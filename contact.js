const timeline = gsap.timeline({defaults: {ease: "power1.out" }});


timeline.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});
timeline.fromTo(".socials", {opacity: 0}, {opacity: 1, duration: 1});
timeline.fromTo(".contact-text", {opacity: 0}, {opacity: 1, duration: 1, delay: 0.2});