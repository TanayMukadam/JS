const sayTanay = function(){
    console.log("Hello Tanay");
}

const changeText = function() 
{document.querySelector('h1').innerHTML = 
    '<h1>Welocome to Js</h1>';}

const changeMe = setTimeout(changeText ,2000)


document.querySelector('#stop').addEventListener('click',
    function(){
        clearTimeout(changeMe);
        console.log("Stopped")
    }
)