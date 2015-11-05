var parallax = {

    them: null,

    init: function(){

        this.them = document.querySelectorAll(".parallax");

        var them = this.them;

        var it = this;

        var valX = 0;
        var valY = 0;

        var doc = document.documentElement;

        window.addEventListener("mousemove", function(event){

            event = event || window.event;

            //var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            //var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

            valX = window.innerWidth/2 - event.clientX /*- left*/;
            valY = window.innerHeight/2 - event.clientY /*- top*/;

            for(var i=0; i<them.length; i++)
            {
                //valX = it.them[i].offsetWidth/2 - event.clientX - left;
                //valY = it.them[i].offsetHeight/2 - event.clientY - top;

                var para_intensity = them[i].getAttribute("data-parallax-distance");

                var val = "translate("+valX/para_intensity+"px,"+valY/para_intensity+"px)";
                //var val = "translate("+valX/para_intensity+"px,"+valY/para_intensity+"px) rotateY("+valX/para_intensity/2+"deg) rotateX("+-valY/para_intensity/2+"deg)";

                them[i].style.WebkitTransform = val;
                them[i].style.MozTransform = val;
                them[i].style.transform = val;
            }

        });

    }
}
