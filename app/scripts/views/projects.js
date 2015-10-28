var projects = {

    init: function(){

        TweenMax.to(document.querySelector('.a_project'),0,{skewX: '20deg', x: '-150%'});

        var it = this;
        //Add event to close project
        $(".a_project__close,.a_project__overlay").on("click",function(){
            audio.playHover("sound/electicity_spark.mp3");
            History.pushState(null, "Corentin Flach • Storyteller - Motion Designer - Front-end developer", location.pathname);
        });
    },

    open: function(index){
        var projectContainer = document.querySelector(".a_project__content");

        //Open project page & put the loader
        projectContainer.innerHTML = "<img src='img/loader.gif' class='loader__gif' alt />";

        TweenMax.to(document.querySelector('.a_project'),0.8,{skewX: '0deg', x: '0%'});

        document.querySelector('.a_project__overlay').style.display = "block";
        TweenMax.to(document.querySelector('.a_project__overlay'), 0.3, {opacity: 1});

        //Request the element
        $.ajax({
          url: "inc/getProject.php?index="+index
        })
        .done(function( data ) {
            projectContainer.innerHTML = data;
        });
    },

    close: function(){
        //Remove effect
        $(".project__effect").removeClass("project__effect--play");
        //Close overlay
        TweenMax.to(document.querySelector('.a_project'),0.8,{skewX: '20deg', x: '-150%'});

        //Dispose overlay
        TweenMax.to(document.querySelector('.a_project__overlay'), 0.3, {opacity: 0,onComplete: function(){
            document.querySelector('.a_project__overlay').style.display = "none";
        }});
    }

}
