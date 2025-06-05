
// gsap.to("#box",{
//     duration:2,
//     x:500,
//     y:500,
//     rotation:60,
//     repeat:-1,
//     yoyo:true,
//     backgroundColor:"blue",
//     borderRadius:"50%"
// })
// const tl = gsap.timeline({ repeat: -1, yoyo: false });

//   // Step 1: Diagonal down-right
//   tl.to("#box", { duration: 0.5, x: 700, y: 100 });

//   // Step 2: Diagonal up-right
//   tl.to("#box", { duration: 0.5, x: 0, y: 200 });

//   // Step 3: Diagonal down-right
//   tl.to("#box", { duration: 0.5, x: 700, y: 300 });

//   // Step 4: Diagonal up-right
//   tl.to("#box", { duration: 0.5, x: 0, y: 400 });
// var tl = gsap.timeline();

// tl.from("h1",{
//     duration: 2,
//     opacity:0,
//     y:150,
//     delay:1,
//     stagger:0.5, // here one by one h1 tag will be animated
//     color:"red",
// })
// tl.to("#box",{
//     duration:2,
//     x:500,
//     rotation:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
// })
// tl.to("#box1",{
//     duration:2,
//     x:500,
//     rotation:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
    
// })
// tl.to("#box2",{
//     duration:2,
//     x:500,
//     rotation:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
    
// })
// tl.to("#box2,#box1,#box",{
//     y:-10,
//     duration:2,
//     stagger:0.5,
//     opacity:0,
// })

const tl = gsap.timeline();

tl.from("h1",{
    duration:.8,
    opacity:0,
    y:-20,
    
    
})
tl.to("h1",{
    duration:.5,
    x:-600,
    color:"red",
})
tl.to("h1",{
    duration:.5,
    y:30,
    color:"blue",
    repeat:1,
    yoyo:true,
})
tl.to("h1",{
    duration:.2,
    x:-580,
    
})
tl.to("h1",{
    duration:1.5,
    scale:1.2,
    color:"white",
})

gsap.from("h3",{
    delay:1,
    duration:1,
    opacity:0,
    y:-20,
    stagger:0.2,
    
})


gsap.from("#page1 .box",{
    scale:0,
    duration:1,
    delay:1,
    opacity:0,
    rotation:360,
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    rotation:360,
    scrollTrigger:{
        trigger:"#page2 .box",
        start:"bottom 90%",
        end:"top 10%",
        markers:true, 
        scrub:1,
    }
})

gsap.to("#page3 h2 ",{
    transform:"translateX(-28%)",

    scrollTrigger:{
        trigger:"#page3",
        start:"top 0%",
        end:"top -100%",
        markers:true, 
        scrub:1,
        pin:true,
    }
})
