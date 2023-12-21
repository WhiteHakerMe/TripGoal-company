gsap.registerPlugin(ScrollTrigger);
gsap.from(".i",{
    y: -50,
    opacity: 0,
    fixed:true,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".i",
        start: "top 70%",
        end:"+=30",
        toggleActions: "restart  reset",
    }
});
gsap.from(".header-nav", {
    y: -100,
    skewY: -10,
    duration: 1
});



// Animatsiya boshlanishi
gsap.from("#section1", {
    opacity: 0,
    x: -500,
    duration: 2,
    

});
gsap.from('.banner-info', {
    opacity: 0,
    x: 500,
    duration: 2,
});


