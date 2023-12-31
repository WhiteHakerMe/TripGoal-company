// // const { default: gsap } = require("gsap");

// gsap.registerPlugin(ScrollTrigger);
// gsap.from(".i",{
//     y: -50,
//     opacity: 0,
//     fixed:true,
//     duration: 1.5,
//     scrollTrigger: {
//         trigger: ".i",
//         start: "top 70%",
//         end:"+=30",
//         toggleActions: "restart  reset",
//     }
// });
// gsap.from(".header-nav", {
//     y: -100,
//     skewY: -10,
//     duration: 1
// });

// gsap.from('#right', {
//     x:200,
//     opacity:0,
//     duration:1,
//     scrollTrigger: {
//         trigger:"#right",
//         toggleActions: "restart none none reset "
//     }
// });

// gsap.from('#center', {
//     y:300,
//     opacity:0,
//     duration:1,
//     scrollTrigger: {
//         trigger:"#center",
//         toggleActions: "restart none none  reset "
//     }
// }),

// gsap.from('#left', {
//     x:-200,
//     opacity:0,
//     duration:1,
//     scrollTrigger: {
//         trigger:"#left",
//         toggleActions: "restart none none  reset "
//     }
// });

// // Animatsiya boshlanishi
// gsap.from("#section1", {
//     opacity: 0,
//     x: -500,
//     duration: 2,
    

// });
// gsap.from('.banner-info', {
//     opacity: 0,
//     x: 500,
//     duration: 2,
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

