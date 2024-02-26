let lo = gsap.timeline()

lo.from(".loder h1",{
    x :-300,
    opacity:0,
    duration:1.5,
    ease:Expo.easeInout,
})
gsap.from(".loder h2",{
    x :300,
    opacity:0,
    duration:1.5,
    ease:Expo.easeInout,
})
lo.to(".loder",{
    y:-500,
    opacity:0
})
lo.from(".nav1",{
    y:-100,
    duration:1,
    ease:Expo.easeInout,
})
gsap.from(".nav3",{
    y:-100,
    duration:1,
    delay:1.7,
    ease:Expo.easeInout,
})
gsap.from(".leftw h1",{
    x:-200,
    duration:1,
    delay:1.7,
    opacity:0,
    ease:Expo.easeInout,
});
gsap.from(".leftw button",{
    y:100,
    duration:1,
    delay:1.7,
    opacity:0,
    ease:Expo.easeInout
})


