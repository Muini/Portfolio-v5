//=require vendors/*.js
//=require components/*.js
//=require views/*.js

//Init the duotone
$('img.duotone').duotone();

//Ready the video
document.querySelector(".header__vid").pause();

//Modules loading
nav.init();
parallax.init();
hover.init();
audio.init();
projects.init();

$(document).ready(function() {

    //Init scroll
    $("html").niceScroll({
        cursorcolor: "#3c1e00",
        cursoropacitymax: 0.5
    });
    /*
    $(".a_project").niceScroll({
        cursorcolor: "#3c1e00",
        cursoropacitymax: 0,
        autohidemode: "hidden"
    });*/

    function finishInit(){
        //audio.playMusic("sound/65daysofstatic_-_Drone_Not_Drones.mp3");
        console.log('%c Welcome on my folio !','background: #f1f1f1; color: #3c1e00');
        //Little delay to not block animations
        setTimeout(function(){
            audio.playHover("sound/whoosh.mp3");
            router.init();
        },500);
    }
    grid.init(finishInit);
});
