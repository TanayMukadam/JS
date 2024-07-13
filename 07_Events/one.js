// attachEvent()  ----- Previous Version on Event Listener
// jQuery -  onEventListener

/* -----------------------	Things to Learn		-----------------------------*/
// type of events, timestamp, preventDefault
// target, toElement, srcElement, currentTarget
// clientX, clientY, offset, screenX, screenY
// altKey, ctrlkey, shiftKey, keyCode





// document.getElementById("images").addEventListener("click", function (e) {
//   console.log("clicked inside the ul");
// });
// document.getElementById("owl").addEventListener("click", function (e) {
//   console.log("owl clicked");
//   e.stopPropagation();
// });
// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     console.log("Google clicked");
//     e.stopPropagation();
//     e.preventDefault();
//   },
//   false
// );


document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName)
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
    // removeIt.parentNode.removeChild(removeIt)
}, false)
