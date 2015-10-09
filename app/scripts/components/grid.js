var grid = {

    projects: null,

    init: function(){

        this.projects = Squary.new(
            ".projects", //   Container class
            4,             //   Resolution
            false,          //   Randomize
            0.4,           //    Transition time
            true,          //    Pixel Correction
            function(){ console.log('%c Welcome on my folio !','background: #f1f1f1; color: #3c1e00'); }     //   Callback
        );

    }

}
