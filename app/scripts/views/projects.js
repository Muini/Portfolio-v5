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

        var self = this;

        var projectContainer = document.querySelector(".a_project__content");

        //Open project page & put the loader
        projectContainer.innerHTML = "<img src='img/loader.gif' class='loader__gif' alt />";

        //$('html,body')[0].style.overflow = "hidden";

        document.querySelector('.a_project__overlay').style.display = "block";
        TweenMax.to(document.querySelector('.a_project__overlay'), 0.4, {skewX: '0deg', x: '0%', ease:Power1.easeOut});

        TweenMax.to(document.querySelector('.a_project'),1,{skewX: '0deg', x: '0%', ease:Power1.easeOut});

        if(self.checkExisting(index)){

        }else{
            //Request the project
            $.ajax({
              url: "inc/getProject.php?index="+index
            })
            .done(function( data ) {
                //Put data
                projectContainer.innerHTML = data;

                //Dispose loader & play animations
                var header = projectContainer.querySelector('.a_project__header');
                var main = projectContainer.querySelector('.a_project__main');
                var footer = projectContainer.querySelector('.a_project__footer');
                var gallery = projectContainer.querySelectorAll('.a_gallery img');
                var video = projectContainer.querySelector('.a_project__video');

                //Hide video if on mobile
                if(window.innerWidth < 640){ video.style.display = "none"; }

                var tl = new TimelineMax({onComplete:function(){
                    //Load the video after animations
                    self.initVideo(video);
                }});
                tl.add(TweenMax.from(header,0.3,{opacity: 0, y: "20px"}));
                tl.add(TweenMax.from(main,0.1,{opacity: 0, y: "20px"}));
                if(video){
                    tl.add(TweenMax.from(video,0.3,{opacity: 0, onComplete:function(){}}));
                }
                tl.add(TweenMax.staggerFrom(gallery,0.3,{x: "-100%", ease:Power1.easeOut},0.1));
                tl.add(TweenMax.from(footer,0.1,{opacity: 0, y: "20px"}));
            });
        }
    },

    close: function(){
        //Remove effect
        $(".project__effect").removeClass("project__effect--play");
        //Close overlay
        TweenMax.to(document.querySelector('.a_project'),0.8,{skewX: '20deg', x: '-150%'});

        //Dispose overlay
        TweenMax.to(document.querySelector('.a_project__overlay'), 0.6, {skewX: '-20deg', x: '150%', scale:1.1, onComplete: function(){
            TweenMax.to(document.querySelector('.a_project__overlay'), 0, {skewX: '-20deg', x: '-150%'});
            document.querySelector('.a_project__overlay').style.display = "none";
            //$('html,body')[0].style.overflow = "auto";
        }});
    },

    checkExisting: function(index){

    },

    initVideo: function(video){
        if(!video)
            return;
        if(window.innerWidth < 640)
            return;
        var videoWrapper = video.querySelector('.a_project__video__wrapper');
        var videoType = videoWrapper.getAttribute('data-video-type');
        var videoId = videoWrapper.getAttribute('data-video-id');
        if(videoType == "youtube"){
            videoWrapper.innerHTML = "<iframe src='https://www.youtube.com/embed/"+videoId+"' frameborder='0' allowfullscreen></iframe>";
        }else if(videoType == "vimeo"){
            videoWrapper.innerHTML = "<iframe src='https://player.vimeo.com/video/"+videoId+"' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
        }
    }

}
