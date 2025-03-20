window.onload = function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger:{
            trigger:'.visual',
            start : '30% 55%',
            end : '100% 0%',
            scrub : 1,
            //markers:true
        }
    })
    .to('.logoWrap #h',{x:'20', 'y':'1450', rotate: '40', ease: 'none', duration:7},0.2)
    .to('.logoWrap #x',{x:'20', 'y':'1120', rotate: '-50', ease: 'none', duration:6},0.3)
    .to('.logoWrap #e',{x:'45', 'y':'1350', rotate: '-50', ease: 'none', duration:7},0)
    .to('.logoWrap #z',{x:'50', 'y':'1350', rotate: '-30', ease: 'none', duration:6},0.3)
    .to('.logoWrap #u',{x:'100', 'y':'1250', rotate: '-40', ease: 'none', duration:6},0.5)
    .to('.logoWrap #s',{x:'50', 'y':'1100', rotate: '-80', ease: 'none', duration:7},0.1)
}