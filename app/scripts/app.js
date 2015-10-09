//=require vendors/*.js
//=include components/*.js

//Font loading
WebFontConfig = {
  custom: {
    families: ['Baron Neue:n8,n7,n4'],
    urls: ['../css/production.min.css']
  },
  google: {
    families: ['Open Sans:300,400,600', 'Antic Slab:400']
  },
  loading: function(){
    console.log('All fonts have been requested.')
  },
  active: function(){
    console.log('All fonts loaded correctly.');
  },
  inactive: function(){
    console.log('Something wrong with the font loader.');
  },
  timeout: 3000
};

(function(d) {
  var wf = d.createElement('script'), s = d.scripts[0];
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
  s.parentNode.insertBefore(wf, s);
})(document);

//Modules loading
parallax.init();
hover.init();
audio.init();

//On ready event
$(document).ready(function() {

    $('img.duotone').duotone();

    //setTimeout(function(){ grid.init(); }, 1000);
    grid.init();

});
