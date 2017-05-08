let countdown;
const timerDisplay= document.querySelector('.displayTimeLeft');
const endTime = document.querySelector('.displayEndTime');
const buttons = document.querySelectorAll('[data-time');

function timer(seconds){
    
    clearInterval(countdown);
    
    
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    
    countdown = setInterval(() => {
       const secondsLeft = Math.round((then - Date.now()) / 1000); 
       if(secondsLeft < 0 ){
       clearInterval(countdown); 
       return;
       }
       displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60) 
    const remainderSeconds = seconds % 60
    const display =`${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    
    document.title= display;
    timerDisplay.textContent = display;
}




function displayEndTime(timestamp){
    const end = new Date(timerstamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent=`Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes}`;
    
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

button.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('sumit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(min*60);
    this.reset();
}
)
