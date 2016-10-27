//global vars
    var logo = new Image();
    var r = 0;

    //song vars
    var songOn = 0;
    var youAndI = new Howl({
      src: ['sound/youandI.mp3']
    });
    var orion = new Howl({
      src: ['sound/orionsbelt.mp3']
    });
    var country = new Howl({
      src: ['sound/countrywillgrow.mp3']
    });
    var daydream = new Howl({
      src: ['sound/daydreamgramophone.mp3']
    });

Button = function(c) {
    ctx.beginPath();
    ctx.arc(($(container).width()/4),($(container).height()/2),($(container).width()/85),0,2*Math.PI);
    ctx.fillStyle="#333333";
    ctx.fill();   
};

//animate play function
function play(){

    //canvas context
    var c=document.getElementById("Canvas");
    var ctx=c.getContext("2d");
    var container = $(c).parent();

    //canvas resize on window size change
    $(window).resize(draw);


    
    
    //init
    function init()
    {   
        //call animationg every setInterval rate
        window.requestAnimationFrame(draw);

        //animate rate (call every 10 milliseconds)
        time=setInterval(draw, 10);        
        return time;
    }


    function draw(){       

        //play You & I
        if((r2 >= .6) && (r2 < .844487) && (songOn == 0)){
            songOn = 1;
            youAndI.stop();
            orion.stop();
            country.stop();
            daydream.stop();
            youAndI.play();
        }
        //play Orion's Belt
        if((r2 >= .844487) && (r2 < 1.059048) && (songOn == 1)){
            songOn = 2;
            youAndI.stop();
            orion.stop();
            country.stop();
            daydream.stop();
            orion.play();
        }
        //play Country Will Grow
        if((r2 >= 1.059048) && (r2 < 1.272657) && (songOn == 2)){
            songOn = 3;
            youAndI.stop();
            orion.stop();
            country.stop();
            daydream.stop();
            country.play();
        }
        //play Daydream Gramophone
        if((r2 >= 1.272657) && (r2 < 1.339608) && (songOn == 3)){
            songOn = 4;
            youAndI.stop();
            orion.stop();
            country.stop();
            daydream.stop();
            daydream.play();
        }

        $(c).attr('width', $(container).width() ); //max width
        $(c).attr('height', $(container).height() ); //max height

        ctx.clearRect(0,0,$(container).width(),$(container).height());

        
        //button Old plau
        //ctx.beginPath();
        //ctx.arc(($(container).width()/4),($(container).height()/2),($(container).width()/85),0,2*Math.PI);
        //ctx.fillStyle="#333333";
        //ctx.fill();

        var playButton = new Button();


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

        //orions ring
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/7),0,2*Math.PI);
        ctx.strokeStyle="#808080";
        ctx.stroke();

        //country ring
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/9),0,2*Math.PI);
        ctx.strokeStyle="#808080";
        ctx.stroke();

        //daydream ring
        ctx.beginPath();
        ctx.arc(0,0,($(container).width()/12.2),0,2*Math.PI);
        ctx.strokeStyle="#808080";
        ctx.stroke();
        

       
        //needle and arm rotation
        ctx.restore();

        if (r2 < 1.339){
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
