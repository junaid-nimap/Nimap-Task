// Countdown in Minutes Task 
let CountMin = 10; 
let time =  CountMin* 60; 
let check = null; 
let displayCount = document.getElementById("displayCount");
    function updateCount(){
        let min = Math.floor(time/60);
        let sec = time % 60;
        min = min <10 ? "0" + min: min; 
        sec = sec < 10 ? "0" + sec: sec; 
        displayCount.innerHTML = min + ": " + sec ;  
        time --;
        if (time < 0){
            clearInterval(time);
            displayCount.innerHTML = "Time Over" ;  
        }
    }
    function CountStart(){
        if (check != null){
            clearInterval();
        }
        check = setInterval(updateCount, 1000); 
    }
    function CountStop(){
        clearInterval(check);
    }

    function CountReset(){
        clearInterval(check);
        time =  CountMin* 60;
        displayCount.innerHTML =  "00: 00";

    }

// Stopwatch Task 
let [sec , min, hr] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null; 
    function stopwatch(){
        sec++
        if (sec == 60){
            sec= 0 ; 
            min++
            if (min == 60){
                min = 0;
                // sec = 0;
                hr++; 
            }
        }
        let h = hr < 10 ? "0" + hr : hr ; 
        let m = min < 10 ? "0" + min : min ; 
        let s = sec < 10 ? "0" + sec : sec ; 
        displayTime.innerHTML =  h +": "  + m + ": " + s; 
    }
    function watchStart(){
        if (timer != null){
            clearInterval(timer);
        }
        timer = setInterval(stopwatch, 1000);
    }
    function watchStop(){
        clearInterval(timer);
    }

    function watchReset(){
        clearInterval(timer);
        [sec , min, hr] = [0,0,0];
        displayTime.innerHTML = "00: 00: 00";

    }

//Implement setTimeout 

