var projects = {

    init: function(){
        var it = this;
        //Add event to close project
        $(".a_project__close,.a_project__overlay").on("click",function(){
            console.log("Close project");
            audio.playHover("sound/electicity_spark.mp3");
            History.pushState({}, "Corentin Flach • Storyteller - Motion Designer - Front-end developer", "?");
        });
    },

    open: function(index){
        console.log("Open project");
        var projectContainer = document.querySelector(".a_project__content");

        //Open project page & put the loader
        projectContainer.innerHTML = "<img src='img/loader.gif' class='loader__gif' alt />";
        $(projectContainer).parent().addClass("a_project--open");

        document.querySelector('.a_project__overlay').style.display = "block";
        TweenMax.to(document.querySelector('.a_project__overlay'), 0.3, {opacity: 1});

        //Request the element
        $.ajax({
          url: "/inc/getProject.php?index="+index
        })
        .done(function( data ) {
            projectContainer.innerHTML = data;
        });
    },

    close: function(){
        //Remove effect
        $(".project__effect").removeClass("project__effect--play");
        //Close overlay
        $(".a_project").removeClass("a_project--open");
        //Dispose overlay
        TweenMax.to(document.querySelector('.a_project__overlay'), 0.3, {opacity: 0,onComplete: function(){
            document.querySelector('.a_project__overlay').style.display = "none";
        }});
    }

}
