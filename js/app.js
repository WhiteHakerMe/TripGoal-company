gsap.from(".header-nav", {
    y: -100,
    skewY: -10,
    duration: 1
});

gsap.registerPlugin(ScrollTrigger);

// Animatsiya boshlanishi
gsap.from("#section1", {
    opacity: 0,
    x: -500,
    duration: 2
    
});
gsap.from('.banner-info', {
    opacity:0,
    x:500,
    duration:2,
});

const elment = document.querySelector('.find');
const elment2 = document.querySelectorAll('find-info')

window.addEventListener('scroll', () => {
    if (scrollY > elment.offsetTop - elment.clientHeight / 2) {
        elment2.forEach((el) => {
            el.style.transform = `translateX(0)`
            el.style.opacity = `1`
        })
    }
})

