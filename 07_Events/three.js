const sayDate = function(str){
    console.log(str, Date.now());
}

const intervalId = setInterval(sayDate, 1000, 'Tanay');

const buttonStart = document.querySelector('#start').addEventListener(
    'click', function(){
        setInterval(sayDate, 1000, "Hi")
    }
)

const buttonStop = document.querySelector("#stop").addEventListener(
    'click', function(){
        clearInterval(intervalId);
        console.log("Interval Stopped");
    }
)
