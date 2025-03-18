$(function(){
    $('.animate').scrolla({
        mobile: true,
        once : false
    })
})

$(function(){
    gsap.registerPlugin(ScrollTrigger);
    //가로 스크롤
    ScrollTrigger.matchMedia({
        '(min-width: 1024px)': function(){
            let list = gsap.utils.toArray('.work ul li');
            let scrollTween = gsap.to(list, {
                xPercent : -100 * (list.length - 1),    //원래 리스트 개수보다 1을 빼서 길이 구한 뒤 가로로 이동
                ease :'none',
                scrollTrigger:{
                    trigger: '.work',
                    pin: true,
                    scrub : 1,
                    start : 'center center',
                    end:'300%',                  //뷰포트의 높이 -> 숫자가 커질 수록 느려짐
                    //markers: true
                }
            })

            //imgBox 모션 (imgBox 가 커지는 애니매이션)
            gsap.utils.toArray('.imgBox').forEach(function(imgBox){
                gsap.timeline({
                    scrollTrigger:{
                        trigger : imgBox,
                        containerAnimation : scrollTween,
                        start : 'center right',
                        end : 'center center',
                        scrub : true
                    }
                })
                .to(imgBox, {'clip-path': 'inset(0%)', ease: 'none', duration : 1},0)


                //imgBox 가 작아지는 애니매이션
                gsap.timeline({
                    scrollTrigger:{
                        trigger : imgBox,
                        containerAnimation : scrollTween,
                        start : 'center center',
                        end : 'center left',
                        scrub : true
                    }
                })
                .to(imgBox, {'clip-path': 'inset(30%)', ease: 'none', duration : 1},0)
            });

            
            
            //textBox 모션 (textBox 가 커지는 애니매이션)
            gsap.utils.toArray('.textBox').forEach(function(textBox){
                gsap.timeline({
                    scrollTrigger:{
                        trigger : textBox,
                        containerAnimation : scrollTween,
                        start : 'center 70%',
                        end : 'center 40%',
                        scrub : true
                    }
                })
                .to(textBox, {'opacity': '1', 'x': -100},0)
                

                //textBox 가 작아지는 애니매이션
                gsap.timeline({
                    scrollTrigger:{
                        trigger : textBox,
                        containerAnimation : scrollTween,
                        start : 'center 30%',
                        end : 'center 20%',
                        scrub : true
                    }
                })
                .to(textBox, {'opacity': '0'},0)

                //counter 텍스트 변경
                gsap.utils.toArray('.num').forEach(function(text){
                    let num = text.getAttribute('data-text')
                    let counter = document.querySelector('.counter .now');

                    ScrollTrigger.create({
                        trigger:text,
                        start:'0% center',
                        end:'100% center',
                        scrub : true,
                        containerAnimation : scrollTween,
                        onEnter: self => counter.innerText = num,       //스크롤 위치가 start 를 지나 앞으로 이동할 때
                        onEnterBack: self => counter.innerText = num    //스크롤 위치가 end 를 지나 뒤로 이동할 때
                    })
                })
            });
        }
    })
})