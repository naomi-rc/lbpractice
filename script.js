
var segment;

function play(x,y){
    y = y * 1000;
    clearSegment(segment);
    console.log("playing x,y" + x + ", " + y);
    var audio = document.getElementById("audio");
    //audio.pause();
    audio.play();
    audio.currentTime = x;


    segment = setInterval(function(){
        //audio.pause();
        audio.currentTime = x;
        //audio.play();
    }, y);
}

function clearSegment(){
    clearInterval(segment);
}


function highlight(el){
    var status = document.getElementById("status");
    status.innerText = el.innerText;
}