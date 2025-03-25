window.onload = function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.con01 .listBox .box').forEach((selector)=>{

        gsap.timeline({
            scrollTrigger:{
                trigger : selector,
                start : '0% 20%',
                end : '0% 0%',
                scrub : 1,
                //markers: true
            }
        })
        .to(selector, {transform: 'rotateX(-10deg) scale(0.9)', transformOrigin:'top', filter:'brightness(0.3)'},0)
    })

    //가로 스크롤이 생겨서 부모요소에 overflow hidden 을 적용해야 하는 경우 유튜브 참고
}