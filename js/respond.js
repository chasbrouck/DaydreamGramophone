//animate play function
function play(){

    //global vars
    var logo = new Image();
    var r = 0;
    var r2 = .6;

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



    //canvas context
    var c=document.getElementById("Canvas");
    var ctx=c.getContext("2d");
    var container = $(c).parent();

    //canvas resize on window size change
    $(window).resize(draw);


    
    
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

        //play You & I
        if((r2 >= .6) && (r2 < .844487) && (songOn == 0)){
            console.log("you and I");
            songOn = 1;
            youAndI.play();
        }
        //play Orion's Belt
        if((r2 >= .844487) && (r2 < 1.059048) && (songOn == 1)){
            console.log("orion's");
            songOn = 2;
            orion.play();
        }
        //play Country Will Grow
        if((r2 >= 1.059048) && (r2 < 1.272657) && (songOn == 2)){
            console.log("Country Will Grow");
            songOn = 3;
            country.play();
        }
        //play Daydream Gramophone
        if((r2 >= 1.272657) && (r2 < 1.339608) && (songOn == 3)){
            console.log("Daydream Gramophone");
            songOn = 4;
            daydream.play();
        }

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

    /*//check if song is playing
    function checkSongOver() {
      if(songOn == 1) {

        //reset songOn if youAndI is over
        youAndI.on('end', function(){
            console.log("you end");
            songOn = 2;
        });

        //reset songOn if orion is over
        orion.on('end', function(){
            console.log("orion end");
            songOn = 3;
        });

        //reset songOn if country is over
        country.on('end', function(){
            console.log("country end");
            songOn = 4;
        });

        //reset songOn if daydream is over
        daydream.on('end', function(){
            console.log("daydream end");
            songOn = 5;
        });

      }
    } */

    //Initial call 
    init();
}
