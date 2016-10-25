//animate play function
function play(){

    //global vars
    var logo = new Image();
    var r = 0;
    var r2 = .6;

    //canvas context
    var c=document.getElementById("Canvas");
    var ctx=c.getContext("2d");
    var container = $(c).parent();

    //canvas resize on window size change
    $(window).resize(draw);


    //play song based on needle rotation angle
    
    //init
    function init()
    {   
        //logo image define
        logo.src = "image/logo.png";

        //call animationg every setInterval rate
        window.requestAnimationFrame(draw);

        //animate rate (call every 10 milliseconds)
        time=setInterval(draw, 10);        
        return time;
    }


    function draw(){       

        $(c).attr('width', $(container).width() ); //max width
        $(c).attr('height', $(container).height() ); //max height

        ctx.clearRect(0,0,$(container).width(),$(container).height());

        
        //button Old plau
        ctx.beginPath();
        ctx.arc(($(container).width()/4),($(container).height()/2),($(container).width()/85),0,2*Math.PI);
        ctx.fillStyle="#333333";
        ctx.fill();

        ctx.save();

        //rotation for record
        ctx.translate(($(container).width()/2), ($(container).height()/2));
        ctx.rotate(r);

        //black vinyl
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/5.5),0,2*Math.PI);
        ctx.fillStyle="#333333";
        ctx.fill();

        //red vinyl
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/16),0,2*Math.PI);
        ctx.fillStyle="#ff4d4d";
        ctx.fill();

        //purple vinyl
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/16),0,1*Math.PI);
        ctx.fillStyle="#9999ff";
        ctx.fill();

        //white vinyl
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/85),0,2*Math.PI);
        ctx.fillStyle="#ffffff";
        ctx.fill();
        

       
        //needle and arm rotation
        ctx.restore();

        if (r2 < 1.4){
        r += 0.01;
        r2 += .00000975609;
        }


        //arm draw
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
