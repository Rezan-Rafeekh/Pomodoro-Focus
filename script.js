let study = 25;
let breakTime = 5;

let mode = "study";
let timeLeft = study * 60;

let timer = null;

let sessions = 0;

function updateDisplay(){

let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;

minutes = minutes.toString().padStart(2,"0");
seconds = seconds.toString().padStart(2,"0");

document.getElementById("timer").textContent =
minutes + ":" + seconds;

}

function startTimer(){

study = document.getElementById("studyInput").value;
breakTime = document.getElementById("breakInput").value;

if(timer) return;

timer = setInterval(()=>{

timeLeft--;

if(timeLeft <= 0){

if(mode === "study"){

sessions++;
document.getElementById("sessions").textContent = sessions;

mode = "break";
document.getElementById("mode").textContent = "Break";
timeLeft = breakTime * 60;

}else{

mode = "study";
document.getElementById("mode").textContent = "Focus";
timeLeft = study * 60;

}

}

updateDisplay();

},1000);

}

function pauseTimer(){

clearInterval(timer);
timer = null;

}

function resetTimer(){

pauseTimer();

mode="study";
timeLeft = study * 60;

document.getElementById("mode").textContent="Focus";

updateDisplay();

}

function playSound(sound){

let audio = document.getElementById("audio");

audio.src = sound;
audio.loop = true;

audio.play();

}

function stopSound(){

let audio = document.getElementById("audio");

audio.pause();

}

updateDisplay();