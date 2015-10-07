//==========================================
// Audio Controller
//==========================================

var audio = {

    //The music you choose
    music: null,

    //Every hover sound is just one player
    hover: null,
    hover2: null,
    altHover: false,

    init: function(){

        this.music = document.getElementById('music');
        this.music.pause();
        this.music.volume = 0.8;

        this.hover = document.getElementById('hover-sound');
        this.hover.pause();
        this.hover.volume = 0.4;
        this.hover2 = document.getElementById('hover-sound2');
        this.hover2.pause();
        this.hover2.volume = 0.4;
        /*
        var btns_music = document.querySelectorAll('.btn_music');
        for(var i=0; i<btns_music.length; i++)
        {
            var it = this;
            btns_music[i].onclick = function(){
                it.playMusic(this.getAttribute('data-music'));
            }
        }*/
    },

    muteMusic: function(){

        this.music.pause();
        //this.music.currentTime = 0;

    },

    playMusic: function(src){

        if(video.it.muted)
            video.it.muted = false;
        if(this.music.src != src)
            this.music.src = src;
        //this.music.currentTime = 0;
        this.music.play();

        document.querySelector('.toggle_sound').className = "toggle-sound hover-sound";
    },

    checkHoverSound: function(){
        var hover_sound = document.querySelectorAll('.hover-sound');
        for(var i=0; i<hover_sound.length; i++)
        {
            var it = this;
            hover_sound[i].onmouseover = function(){
                it.playHover(this.getAttribute('data-hover-sound'));
            }
        }
    },

    playHover: function(src){
        if(!video.it.muted)
        {
            if(this.altHover){
                this.hover2.pause();
                if(this.hover2.src != src)
                    this.hover2.src = src;
                //this.hover2.currentTime = 0;
                this.hover2.play();
                this.altHover = false;
            }else{
                this.hover.pause();
                if(this.hover.src != src)
                    this.hover.src = src;
                //this.hover.currentTime = 0;
                this.hover.play();
                this.altHover = true;
            }
        }

    }

}
