var Min = 00;
var Sec = 00;
var mSec = 00;
var interval;
var minTime = document.getElementById("min");
var secTime = document.getElementById("sec");
var msecTime = document.getElementById("msec");


function timer(){
    mSec++;
    msecTime.innerHTML = mSec + "ms ";
    if(mSec >= 100){
        Sec++;
        secTime.innerHTML = Sec + "s : ";
        mSec = 00;
    }else if(Sec >=60){
        Min++;
        minTime.innerHTML = Min+ "m : ";
        Sec = 00;
    }
}
function start(){
    interval = setInterval(timer,10);
}
 
function pause(){
   clearInterval(interval);
}

function reset(){
    Min = 0+"0";
    Sec = 0+"0";
    mSec = 0+"0";
    minTime.innerHTML = " "+Min+"m : ";
    secTime.innerHTML = Sec+"s : ";
    msecTime.innerHTML = mSec+"ms";
    pause();
}