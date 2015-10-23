var projects = {

    init: function(){
        var it = this;
        //Read the URL to check if we need to open a project
        $(".a_project__close").on("click",function(){
            audio.playHover("sound/electicity_spark.mp3");
            History.pushState({}, "Corentin Flach • Storyteller - Motion Designer - Front-end developer", "?");
        });
    },

    open: function(index){
        var projectContainer = document.querySelector(".a_project__content");

        //Open project page & put the loader
        projectContainer.innerHTML = "<img src='img/loader.gif' class='loader__gif' alt />";
        $(projectContainer).parent().addClass("a_project--open");

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
    }

}
