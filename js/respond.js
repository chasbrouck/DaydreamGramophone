function play(){
    //Get the canvas &
    var logo = new Image();
    var c=document.getElementById("Canvas");
    var ctx=c.getContext("2d");
    var container = $(c).parent();

    var r = 0;
    var r2 = .6;
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

        
        //button
        ctx.beginPath();
        ctx.arc(($(container).width()/4),($(container).height()/2),($(container).width()/85),0,2*Math.PI);
        ctx.fillStyle="#333333";
        ctx.fill();

        ctx.save();

        //rotate
        ctx.translate(($(container).width()/2), ($(container).height()/2));
        ctx.rotate(r);

        //black
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/5.5),0,2*Math.PI);
        ctx.fillStyle="#333333";
        ctx.fill();

        //red
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/16),0,2*Math.PI);
        ctx.fillStyle="#ff4d4d";
        ctx.fill();

        //purple
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/16),0,1*Math.PI);
        ctx.fillStyle="#9999ff";
        ctx.fill();

        //white
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/85),0,2*Math.PI);
        ctx.fillStyle="#ffffff";
        ctx.fill();
        

       
        
        ctx.restore();

        if (r2 < 1.4){
        r += 0.01;
        r2 += 0.000064;
        }


        ctx.translate(($(container).width()/1.4),($(container).height()/2))

        ctx.rotate(r2);
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/84),0,2*Math.PI);
        ctx.fillStyle="#808080";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0,($(container).width()/6.9),($(container).width()/84),0,2*Math.PI);
        ctx.fillStyle="#808080";
        ctx.fill(); 


        ctx.fillRect((0-($(container).width()/84)),0,($(container).width()/42),($(container).width()/7));
    }

    //Initial call 
    init();
}
