var grid = {

    it: null,

    init: function(){

        this.it = Squary.new(
            ".projects", //   Container class
            4,             //   Resolution
            false,          //   Randomize
            0.4,           //    Transition time
            true,          //    Pixel Correction
            function(){
                projects.init();
                audio.playHover("sound/whoosh.mp3");
                audio.playMusic("sound/65daysofstatic_-_Drone_Not_Drones.mp3");
                console.log('%c Welcome on my folio !','background: #f1f1f1; color: #3c1e00');
            }    //   Callback
        );

        this.it.onClick(function(){

            //Open the good project
            var index = this.getAttribute("class").split("project-id--")[1].split(" ")[0];

            audio.playHover("sound/electicity_spark.mp3");

            projects.open(index);

        });

    }

}
