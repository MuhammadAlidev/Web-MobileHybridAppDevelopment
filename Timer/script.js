var timerr = 0;
var interval;
var timeR = document.getElementById("timer");

function timer(){
    timerr++;
    timeR.innerHTML = timerr;
}
function start(){
    var start = document.getElementById("start");
    start.disabled = true;
    interval = setInterval(timer,10);
}
 
function pause(){
    var pause = document.getElementById("pause");
    pause.disabled = true;
   clearInterval(interval);
}

function reset(){
    alert(Math.round(timerr*1000/100000)+" seconds");
    var start = document.getElementById("start");
    start.disabled = false;
    var pause = document.getElementById("pause");
    pause.disabled = false;
    timerr = 0;
    timeR.innerHTML = timerr;
    pause();
}