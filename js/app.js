 var on = 0;
 var logo = new Image();
 var c=document.getElementById("Canvas");
 var ctx=c.getContext("2d");
 var container = $(c).parent();
 var r2 = .6;

 $(window).resize(draw2);

logo.src = "image/logo.png";

playButton = function(c) {
    ctx.beginPath();
    ctx.arc(($(container).width()/4),($(container).height()/2),($(container).width()/85),0,2*Math.PI);
    ctx.fillStyle="#333333";
    ctx.fill();   
};


draw2(); 


function draw2(){
        
        $(c).attr('width', $(container).width() ); //max width
        $(c).attr('height', $(container).height() ); //max height

        //button
        var midX = ($(container).width()/2);
        var midY = ($(container).height()/2);
        var button = new playButton();

       //black
        ctx.save();
        ctx.translate(midX, midY);
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


        //arm
        ctx.restore();


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


        function checkIfInsideButtonCoordinates(buttonObj, mouseX, mouseY)
        {   
            if(((mouseX > ($(container).width()/4)) && (mouseX < (($(container).width()/4) + ($(container).width()/42)))) && ((mouseY > ($(container).height()/2)) && (mouseY < (($(container).height()/2) + ($(container).width()/42)))))
                return true;
            else
                return false;

        }

        $("#Canvas").click(function(eventObject) {
            mouseX = (eventObject.pageX - this.offsetLeft) + ($(container).width()/85);
            mouseY = (eventObject.pageY - this.offsetTop) + ($(container).width()/85);

            if(checkIfInsideButtonCoordinates(button, mouseX, mouseY) && (on == 0) )
            { 
                on = 1;
                play();
          
            }else{
  
            }
        });
        
}


        
