var parallax = {

    _PARA_FORCE_MAX: 100,

    _elems: null,

    init: function(){

        //Parallax Function
        this._elems = document.querySelectorAll(".para_move");

        //init distance
        /*
        for(var i=0; i<this._elems.length; i++)
        {
            var para_intensity = this._elems[i].getAttribute("para-force");
            var scale = 1 - (para_intensity/this._PARA_FORCE_MAX); //200 est la valeur max de para-force

            var val = "scale("+scale+")";

            this._elems[i].style.WebkitTransform = val;
            this._elems[i].style.MozTransform = val;
            this._elems[i].style.transform = val;
        }*/

        var it = this;

        (function() {
            window.onmousemove = handleMouseMove;
            function handleMouseMove(event) {
                event = event || window.event;

                //var valX = window.innerWidth/2 - event.clientX;
                //var valY = window.innerHeight/2 - event.clientY;

                for(var i=0; i<it._elems.length; i++)
                {
                    var valX = it._elems[i].offsetWidth/2 - event.clientX;
                    var valY = it._elems[i].offsetHeight/2 - event.clientY;

                    var para_intensity = it._elems[i].getAttribute("para-force");
                    //var scale = 1 - (para_intensity/it._PARA_FORCE_MAX); //200 est la valeur max de para-force

                    //var val = "translate("+valX/para_intensity+"px,"+valY/para_intensity+"px) rotateY("+valX/para_intensity/2+"deg) rotateX("+-valY/para_intensity/2+"deg) scale("+scale+")";
                    var val = "translate("+valX/para_intensity+"px,"+valY/para_intensity+"px) rotateY("valX/para_intensity/2+"deg) rotateX("+-valY/para_intensity/2+"deg)";

                    //var val = "translate("+valX/para_intensity+"px,"+valY/para_intensity+"px) scale("+scale+")";
                    //var val = "translate("+valX/para_intensity+"px,"+valY/para_intensity+"px)";

                    it._elems[i].style.WebkitTransform = val;
                    it._elems[i].style.MozTransform = val;
                    it._elems[i].style.transform = val;
                }
            }
        })();

    }

}
