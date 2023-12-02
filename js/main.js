const timeLine = gsap.timeline();

timeLine.from(".nav", {
    duration: 0.4,
    delay: 0.3,
    y: -40,
    opacity: 0
});

timeLine.from(".hero__text h1", {
    duration: 0.6,
    stagger: 0.3,
    y: 40,
    opacity: 0
});

timeLine.from(".hero__image", {
    duration: 0.6,
    stagger: 0.3,
    width: 0,
    rotate: -8
});

timeLine.from(".hero__scroll", {
    duration: 0.4,
    y: -20,
    opacity: 0
});

timeLine.to(".hero__scroll-icon", {
    duration: 1,
    delay: 0.3,
    repeat: -1,
    yoyo: true,
    y: -8,
});