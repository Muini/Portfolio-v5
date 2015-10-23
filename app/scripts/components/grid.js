var grid = {

    it: null,

    init: function(callback){

        this.it = Squary.new(
            ".projects", //   Container class
            4,             //   Resolution
            false,          //   Randomize
            0.4,           //    Transition time
            true,          //    Pixel Correction
            function(){
                callback();
            }    //   Callback
        );

        this.it.onClick(function(){

            //Open the good project
            var index = this.getAttribute("class").split("project-id--")[1].split(" ")[0];

            //Play sound effect
            audio.playHover("sound/electicity_spark.mp3");

            //Play effect
            $(this).find(".project__effect").addClass("project__effect--play");

            var name = $(this).find("h1").html();

            History.pushState({state:index}, "Corentin Flach • "+name, "/?project="+index);

        });

    }

}
