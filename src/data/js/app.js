// fadeInTimeline
//     .fromTo(
//         ".logo",
//         { y:0,},
//         { y:30,}
//     );

// let fadeOutTimeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".logo",
//         start: 1080,
//         end: 2200,
//         toggleActions: "play reverse restart reverse",
//         scrub: true,
//     },
// });

// fadeOutTimeline
//     .fromTo(
//         ".logo",
//         { y:0},
//         { y:0,scale:0,},
//     );
// gsap.to(".bub-fill", {
//     scrollTrigger: {
//         Trigger: "",
//         toggleActions:"restart resume reverse resume",
//         scrub: true,
//         start: "top",
//         end: 1000,
//     },
//     fill: 'rgba(106, 76, 144, 1)'
// });

const vh = (coef) => window.innerHeight * (coef / 100);
const vw = (coef) => window.innerWidth * (coef / 100);

document.addEventListener("DOMContentLoaded", function (event) {

    gsap.registerPlugin(ScrollTrigger);

    let fadeInTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".logo",
            start: "% 0%",
            end: "120% 0%",
            toggleActions: "play reverse restart reverse",
            scrub: true,
            // markers:true,
            pin: ".logo",
        },
    });
    fadeInTimeline
        .fromTo(
            ".logo", {
                y: 0,
            }, {
                y: 0,
                boxShadow: "-23px 30px 30px black",
            }
        );

    let fadeBarrAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: ".dec-barr",
            start: "-52 0%",
            end: "103% 1%",
            toggleActions: "play reverse restart reverse",
            scrub: true,
            // markers:true,
            pin: ".dec-barr",
        },
    });
    fadeBarrAnimation
        .fromTo(
            ".dec-barr", {
                y: 0,
            }, {
                rotate: -49,
            }
        );
    gsap.to(".st-tlan1", {
        scrollTrigger: {
            Trigger: "",
            toggleActions: "restart resume reverse resume",
            scrub: true,
            start: "0% 35%",
            end: 1000,
            // markers: true,
            pin: ".st-tlan1",
        },
        x: -200,
        boxShadow: "10px 20px 30px blue",
    });
    gsap.to(".ts-sh", {
        scrollTrigger: {
            Trigger: "",
            toggleActions: "restart resume reverse resume",
            scrub: true,
            start: "0% 35%",
            end: 1000,
            // markers: true,
            pin: ".ts-sh",
        },
        textShadow: "2px 2px #ff0000",
    });

});