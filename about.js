const timeline = gsap.timeline({defaults: {ease: "power1.out" }});


timeline.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});
timeline.fromTo(".para", {opacity: 0}, {opacity: 1, duration: 0.5});
timeline.fromTo("p", {opacity: 0}, {opacity: 1, duration: 1});