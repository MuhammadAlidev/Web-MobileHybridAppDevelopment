var timerr = 0;
var interval;
var timeR = document.getElementById("timer");

function timer(){
    timerr++;
    timeR.innerHTML = timerr;
}
function start(){
    interval = setInterval(timer,10);
}
 
function pause(){
   clearInterval(interval);
}

function reset(){
    timerr = 0;
    timeR.innerHTML = timerr;
    pause();
}