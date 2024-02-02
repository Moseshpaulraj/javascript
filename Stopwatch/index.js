
const display =document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isrunning = false;

function start(){
    if(!isrunning){
        startTime= Date.now()-elapsedTime;
        timer = setInterval(update, 10);
        isrunning=true;

    }

}
function stop(){
    if(isrunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isrunning=false;
    }

}
function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isrunning=false;
    display.textContent="00:00:00:00";


}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime-startTime;

    let hours=Math.floor(elapsedTime /(1000*60*60));
    let minutes=Math.floor(elapsedTime /(1000 * 60) % 60);
    let seconds=Math.floor(elapsedTime /1000 % 60);
    let millisecods=Math.floor(elapsedTime % 1000 /10);

    hours =String(hours).padStart(2, "0");
    minutes =String(minutes).padStart(2, "0");
    seconds =String(seconds).padStart(2, "0");
    millisecods =String(millisecods).padStart(2, "0");

    display.textContent=`${hours}:${minutes}:${seconds}:${millisecods}`

}