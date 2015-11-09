var ivy = {

    init: function(){

        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        var borderAgent = false;

        var hidefCanvasWidth;
        var hidefCanvasHeight;

        //Init
        var settings = {};
        settings.displaySizeX = hidefCanvasWidth;
        settings.displaySizeY = hidefCanvasHeight;
        settings.maxIncrement = 1;
        settings.numAgents = 20;
        //settings.colors = ["150,250,200","100,200,150","100,200,250","100,250,70"];
        //settings.colors = ["50,150,250","0,100,200","0,50,100","100,200,250"];
        //settings.colors = ["50,150,250","0,100,200","0,50,100","100,200,250","150,250,200","100,200,150","100,200,250","100,250,70"];
        //settings.colors = ["50,50,50","100,100,100","150,150,150","200,200,200"];
        settings.colors = ["115,110,116","105,77,63","228,240,228"]; //Good
        //settings.colors = ["33,33,87","69,185,176","135,0,7","95,50,117"];
        settings.agentAlpha = 0.2;
        settings.agentSize = 4;
        settings.maxAgent = 80;

        function canvasSizing(){
            hidefCanvasWidth = window.innerWidth;
            hidefCanvasHeight = window.innerHeight;

            if (window.devicePixelRatio) {
                canvas.width = hidefCanvasWidth * window.devicePixelRatio;
                canvas.height = hidefCanvasHeight * window.devicePixelRatio;
                canvas.style.width = hidefCanvasWidth+"px";
                canvas.style.height = hidefCanvasHeight+"px";
                context.scale(window.devicePixelRatio, window.devicePixelRatio);
            }else{
                canvas.width = hidefCanvasWidth;
                canvas.height = hidefCanvasHeight;
            }

            settings.displaySizeX = hidefCanvasWidth;
            settings.displaySizeY = hidefCanvasHeight;
        }

        canvasSizing();


        // tree definitions
        var x1 = window.innerWidth*0.2;
        var y1 = 0;
        var x2 = window.innerWidth*0.22;
        var y2 = (window.innerHeight*0.3)/2;

        // growing definitions
        var angle = 0.15 * Math.PI;
        var depth = 1000 / 200;
        //var depth = document.querySelector('.footer__container>span').getAttribute('data-visitors') / (document.querySelector('.footer__container>span').getAttribute('data-visitors')/100);

        // save segments for later animation
        var branches=[];
        for(var i=0;i<=depth;i++){branches.push([]);}
        var segments=[];
        var segmentIndex=0;

        // animation variables
        var nextTime=0;
        var delay=40/depth;

        ///////////// Do stuff!

        // define the tree
        defineTree( x1, y1, x2, y2, angle, depth );

        // create a combined array of segments to be drawn with animation
        for(var i=branches.length-1;i>=0;i--){
          segments=segments.concat(branches[i]);
        }

        // load leaf images and then start animating
        var leaves=new Image();
        leaves.onload=function(){
          // animate drawing the tree
          requestAnimationFrame(animate);
        }
        leaves.src='https://dl.dropboxusercontent.com/u/139992952/multple/leaves.png';



        ///////////// functions

        // function to reiteratively define all segments of a tree
        function defineTree( x1, y1, x2, y2, angle, depth ){

          var segment={
            x1:x1,y1:y1,
            x2:x2,y2:y2,
            linewidth:depth,
          };
          branches[depth].push(segment);

          if( depth > 0 ){
            var x = x2 - x1;
            var y = y2 - y1;

            var scale = 0.5 + Math.random() * 0.5;

            x *= scale;
            y *= scale;

            var xLeft = x * Math.cos( -angle ) - y * Math.sin( -angle );
            var yLeft = x * Math.sin( -angle ) + y * Math.cos( -angle );

            var xRight = x * Math.cos( +angle ) - y * Math.sin( +angle );
            var yRight = x * Math.sin( +angle ) + y * Math.cos( +angle );

            xLeft += x2;
            yLeft += y2;

            xRight += x2;
            yRight += y2;

            defineTree( x2, y2, xLeft, yLeft, angle, depth - 1 );
            defineTree( x2, y2, xRight, yRight, angle, depth - 1 );
          }
        }

        // draw 1 segment of the tree
        function drawSegment(segment){
          context.strokeStyle = 'rgba(60,30,0,.1)';
          context.lineWidth = segment.linewidth;
          context.beginPath();
          context.moveTo( segment.x1, segment.y1 );
          context.lineTo( segment.x2, segment.y2 );
          context.stroke();
          //
          //if(segment.linewidth==0){
            /*
            var dx=segment.x2-segment.x1;
            var dy=segment.y2-segment.y1;
            var angle=Math.atan2(dy,dx)+Math.PI/2;
            var i=parseInt(Math.random()*2.99);
            var j=parseInt(Math.random()*1.99);
            context.save();
            context.translate(segment.x2,segment.y2);
            context.rotate(angle);
            context.scale(.25,.25);
            context.drawImage(leaves,127*i,142*j,127,142,-127/2,-142/2,127,142);
            context.restore();

            var dx=segment.x2-segment.x1;
            var dy=segment.y2-segment.y1;
            var angle=Math.atan2(dy,dx)+Math.PI/2;
            var i=parseInt(Math.random()*2.99);
            var j=parseInt(Math.random()*1.99);
            context.save();
            context.translate((segment.x2+segment.x1)/2,(segment.y2+segment.y1)/2);
            context.rotate(angle);
            context.scale(.25,.25);
            context.drawImage(leaves,127*i,142*j,127,142,-127/2,-142/2,127,142);
            context.restore();
            */
          //}
        }


        // animate drawing each segment of the tree
        function animate(currentTime){

          // request another loop until all segments have been drawn
          if(segmentIndex<segments.length){
            requestAnimationFrame(animate);
          }

          // delay until nextTime
          if(currentTime<nextTime){return;}

          // set the new nextTime
          nextTime=currentTime+delay;

          // draw the current segment
          drawSegment(segments[segmentIndex]);

          // increment the segmentIndex for next loop
          segmentIndex++;

        }
    }
}
