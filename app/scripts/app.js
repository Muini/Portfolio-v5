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
        cursoropacitymax: 0.5
    });

    //Init the duotone
    $('img.duotone').duotone();

    function finishInit(){
        //audio.playMusic("sound/65daysofstatic_-_Drone_Not_Drones.mp3");
        console.log('%c Welcome on my folio !','background: #f1f1f1; color: #3c1e00');
        //Little delay to not block animations
        setTimeout(function(){

            router.init();

            audio.playHover("sound/whoosh.mp3");

            //Dispose loader & play animations
            var loader = document.querySelector('.loader');
            TweenMax.to(loader,1,{opacity: 0, onComplete: function(){
                loader.style.display = "none";
                document.querySelector(".header__vid").play();
            }});

            /*
            $(".a_project").niceScroll({
                cursorcolor: "#3c1e00",
                cursoropacitymax: 0,
                autohidemode: "hidden"
            });
            */

        },1000);
    }
    grid.init(finishInit);
});
