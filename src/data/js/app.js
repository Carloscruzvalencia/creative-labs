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
                boxShadow: "-23px 30px 30px white",
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
        textShadow: "10px 10px white",
    });
    gsap.to(".person-2", {
        scrollTrigger: {
            Trigger: "",
            toggleActions: "restart resume reverse resume",
            scrub: true,
            start: "60% 100%",
            end: "60% 45%",
            // markers: true,
        },
        x:-1730,
    });
    gsap.to(".th-1", {
        scrollTrigger: {
            Trigger: "",
            toggleActions: "restart resume reverse resume",
            scrub: true,
            start: "60% 100%",
            end: "60% 45%",
            // markers: true,
        },
        textShadow: "10px 10px white",
    });
    gsap.to(".tx-1", {
        scrollTrigger: {
            Trigger: "",
            toggleActions: "restart resume reverse resume",
            scrub: true,
            start: "80% 100%",
            end: "80% 45%",
            // markers: true,
        },
        textShadow: "10px 10px white",
    });
});