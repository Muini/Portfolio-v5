//=require vendors/*.js
//=require components/*.js
//=require views/*.js


//Ready the video
document.querySelector(".header__vid").pause();

//Modules loading
nav.init();
parallax.init();
audio.init();
projects.init();

$(document).ready(function() {

    //Init scroll
    $("html").niceScroll({
        cursorcolor: "#3c1e00",
        cursoropacitymax: 0.5,
        scrollspeed: 80,
        mousescrollstep: 50
    });

    function finishInit(){
        //audio.playMusic("sound/65daysofstatic_-_Drone_Not_Drones.mp3");
        console.log('%c Welcome on my folio !','background: #f1f1f1; color: #3c1e00');
        //Little delay to not block animations
        setTimeout(function(){

            router.init();

            ivy.init();

            audio.playHover("sound/whoosh.mp3");

            //Dispose loader & play animations
            var loader = document.querySelector('.loader');
            var desc = document.querySelector('.header__desc');
            var socials = document.querySelectorAll('.header__socials a');
            var menu = document.querySelectorAll('.header__nav li');
            var projects = document.querySelectorAll('.projects');

            var tl = new TimelineMax({onComplete:function(){
                loader.style.display = "none";
                document.querySelector(".header__vid").play();
                var tl2 = new TimelineMax({onComplete:function(){

                }});
            }});

            //tl.add(TweenMax.to(loader,0.4,{scale: 0.95}));
            tl.add(TweenMax.to(loader,0.8,{scaleY: 0, ease:Power2.easeInOut}));
            tl.add(TweenMax.from(desc,0.5,{opacity: 0, y: "20px", ease:Power1.easeOut}));
            tl.add(TweenMax.staggerFrom(socials,0.4,{opacity: 0, y: "40px", ease:Power1.easeOut},0.05));
            tl.add(TweenMax.staggerFrom(menu,0.4,{opacity: 0, y: "-20px", ease:Power1.easeOut},0.05));
            tl.add(TweenMax.from(projects,1,{opacity: 0}));

            //Init project scroll
            $(".a_project__content").niceScroll({
                cursorcolor: "#3c1e00",
                cursoropacitymax: 0.5,
                scrollspeed: 80,
                mousescrollstep: 50
            });

        },1000);
    }
    grid.init(finishInit);
});
