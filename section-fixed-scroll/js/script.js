$(document).on('click', 'a[href="#"]',function(e){
    e.preventDefault();
})

//scrolla.js
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    })
})

$(function(){Splitting();})

$(function(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('section').forEach((section, i)=>{
        ScrollTrigger.create({
            trigger : section,
            start : 'top top',
            pin : true,
            pinSpacing : false,
            //markers : true
        })
    })

    ScrollTrigger.create({
        snap : 1 / (section.length - 1)
    })
})