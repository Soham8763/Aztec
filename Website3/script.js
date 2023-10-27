const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger:0.2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2",{
    y: 50,
    stagger: 0.3,
    opacity: 0,
    ease: Expo,
    duration:1
})

Shery.imageEffect("#imagentext img",{
    style:3,
    config: {"uColor":{"value":false},"uSpeed":{"value":2.56,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.79,"range":[0,5]},"uFrequency":{"value":1.82,"range":[0,10]},"geoVertex":{"range":[1,64],"value":19.74},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.36,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
})

Shery.imageEffect(".imageff img",{
    style:5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.44,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.76,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
})

gsap.from("#imagentext img",{
    z: -3,
    opacity:0,
    duration:1,
    ease: Expo.easenInOut
})

Shery.imageEffect("#bimage",{
    style: 5,
    config: {"a":{"value":1.24,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.126800692317934},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.16,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":0.55,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.33,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.13,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.45,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey: true
})

document.querySelector("#ftext button").addEventListener("mouseover",function(){
    gsap.to("#future video",{
        opacity:1,
        duration: 1,
        ease: Power4
    })
})

document.querySelector("#ftext button").addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        duration: 1,
        ease: Power4
    })  
})