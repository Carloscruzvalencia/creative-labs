const vh = (coef) => window.innerHeight * (coef / 100);
const vw = (coef) => window.innerWidth * (coef / 100);

document.addEventListener("DOMContentLoaded",function (event) {
    
    gsap.registerPlugin(ScrollTrigger);

    let fadeInTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".logo",
            start: "center 80%",
            end: "center 50%",
            toggleActions: "play reverse restart reverse",
            scrub: 0.4,
            markers:true,
        },
    });
    
    let fadeOutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".logo",
            start: 1080,
            end: 2200,
            toggleActions: "play reverse restart reverse",
            scrub: true,
        },
    });
    
    fadeInTimeline
        .fromTo(
            ".logo",
            { y: 0,},
            { y: 800,scale:30,}
        );
    
    fadeOutTimeline
        .fromTo(
            ".logo",
            { y:0},
            { y:2000,scale:0,},
        );
    

    


});