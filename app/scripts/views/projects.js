var projects = {

    init: function(){
        //Read the URL to check if we need to open a project
    },

    open: function(index){
        var projectContainer = document.querySelector(".a_project");

        //Open project page & put the loader
        projectContainer.innerHTML = "<img src alt />";
        $(projectContainer).addClass("a_project--open");

        //Request the element
        $.ajax({
          url: "/inc/getProject.php?index="+index
        })
        .done(function( data ) {
            console.log( "Project "+index+" loaded !" );
            projectContainer.innerHTML = data;
        });
    }

}
