gsap.from(".header-nav", {
    y: -100,
    skewY: -10,
    duration: 1
});

gsap.registerPlugin(ScrollTrigger);

// Animatsiya boshlanishi
gsap.from("#section1 .img1", {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
        trigger: "#section1",  // O'qim sug'uruvchi element
        start: "top",      // O'qim boshlangan joy
        end: "bottom",
        y: -50,   // O'qim tugagan joy
        scrub: 1,
    },
});
