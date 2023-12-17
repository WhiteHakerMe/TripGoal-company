gsap.registerPlugin(ScrollTrigger);
gsap.from(".header-nav", {
    y:-100,
    skewY:-10,
    duration:1
});

gsap.from('.banner-img-box', {
    // y:-100,
    // duration:1,
    scale:10,
    ease:"ease",
    ScrollTrigger: {
        trigger:'.img1',
        scrub:1,
        start: "top top",
        end:"bottom",
        pin:true
    }
})