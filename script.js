const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const clearbutton = document.getElementsByClassName("clear")[0];
const resetutton = document.getElementsByClassName("reset")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];




let isPlay = false
let secCounter = 0;
let sec;
let centiCounter = 0;
let centiSec;
let min;
let minCounter = 0;
let isReset = false;
let lapitem = 0;


const toggleButtton = () => {
    lapButton.classList.remove("hidden")
    resetutton.classList.remove("hidden")
}

const play = () => {
    if(!isPlay && !isReset){
        playButton.innerHTML = 'Pause';
        


      sec =  setInterval(() => {
        if (secCounter === 59){
            secCounter = 0;
            minCounter++;
             minute.innerHTML= `${String(minCounter).padStart(2,"0")}`;
        }
    second.innerHTML = `${String(++secCounter).padStart(2,"0")}`;
    },1000)


 centiSec =  setInterval(() => {
    if(centiCounter === 100){
        centiCounter = 0;
    }
    centiSecond.innerHTML= `${String(++centiCounter).padStart(2,"0")}` ;
      },10)
    
        isPlay= true;
    isReset = true;

    const cir = document.querySelector(".ocir");
cir.classList.add("run");
}
        else{
            playButton.innerHTML = 'Play';
            clearInterval(min);
            clearInterval(sec);
            clearInterval(centiSec);
            isPlay = false;
            isReset = false;
            const cir = document.querySelector(".ocir");
             cir.classList.remove("run");

        }
      
    
    toggleButtton();
}


const reset = () => {
    isReset = true;
    play();
    lapButton.classList.add("hidden");
    resetutton.classList.add("hidden");
    second.innerHTML = '&nbsp;00 :'
    centiSecond.innerHTML = '&nbsp;00';
    minute.innerHTML = '00 :';
minCounter = 0;
secCounter = 0;
centiCounter = 0;
    const cir = document.querySelector(".ocir");
cir.classList.remove("run");
}


const lap = () =>{
    const li = document.createElement("li");
const number = document.createElement("span");
const timeStamp = document.createElement("numb");

li.setAttribute("class","lapitem");
number.setAttribute("class","numb");
timeStamp.setAttribute("class","timestamp");

number.innerText = `${++lapitem}`;
timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`;

li.append(number, timeStamp);
laps.append(li);

clearbutton.classList.remove("hidden");


}


const clearAll = () => {
    laps.innerHTML = '';
    laps.append(clearbutton);
    clearbutton.classList.add("hidden");
    lapitem = 0;
}



playButton.addEventListener("click",play);
resetutton.addEventListener("click",reset);
lapButton.addEventListener("click",lap);
clearbutton.addEventListener("click",clearAll);


