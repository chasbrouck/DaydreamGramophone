
    //Get the canvas &
    var logo = new Image();
    var c=document.getElementById("Canvas");
    var ctx=c.getContext("2d");
    var container = $(c).parent();

    var r = 0;
    //Run function when browser resizes
    $(window).resize(draw);


    var audio = new Audio('sound/DaydreamGramophone.mp3');
    audio.play();

    //init
    function init()
    {
        logo.src = "image/logo.png";
        window.requestAnimationFrame(draw);
        time=setInterval(draw, 10);
        
        return time;
    }


    function draw(){       

        $(c).attr('width', $(container).width() ); //max width
        $(c).attr('height', $(container).height() ); //max height

        ctx.clearRect(0,0,$(container).width(),$(container).height());

        ctx.translate(($(container).width()/2), ($(container).height()/2));
         //record
        //black
        ctx.rotate(r);

        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/5.5),0,2*Math.PI);
        ctx.fillStyle="#333333";
        ctx.fill();

        //red
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/16),0,2*Math.PI);
        ctx.fillStyle="#ff4d4d";
        ctx.fill();

        //red
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/16),0,1*Math.PI);
        ctx.fillStyle="#9999ff";
        ctx.fill();


        ctx.font="20px Georgia";
        ctx.fillStyle="#333333";
        ctx.fillText("DG",-15,-20);

        //white
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/85),0,2*Math.PI);
        ctx.fillStyle="#ffffff";
        ctx.fill();
        
        r += 0.01;
        
    }

    //Initial call 
    init();
