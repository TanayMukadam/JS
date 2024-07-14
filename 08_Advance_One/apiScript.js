
const requestUrl = 'https://api.github.com/users/TanayMukadam'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
// console.log("Here");
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);

    if (xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(data);
        console.log(data.following)
}
}
console.log(xhr.readyState);
xhr.send();