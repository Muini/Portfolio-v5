var router = {
    init: function(){
        //First launch !
        var it = this;
        //Bind the page changes
        History.Adapter.bind(window,'statechange',function(){
            it.goto();
        });
        //Dispose loader & play animations
        var loader = document.querySelector('.loader');
        loader.style.display = "none";

        document.querySelector(".header__vid").play();

        //Open project if necessary
        it.goto();
    },
    goto: function(){
        //Get the project index
        var index = History.getState().hash;

        if(index != undefined){
            //Explode the hash
            index = index.split('&')[0];
            index = index.split('project=')[1];
            //Open the good project
            if(index <= 0 || index == undefined)
                projects.close();
            else
                projects.open(index);
        }
    }
}
