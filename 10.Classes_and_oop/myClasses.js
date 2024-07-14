//++++++++                      Class Constructor             +++++++++++
// ES6


class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}


const tanay = new User('tanay', 'tanay@gmail.com', 'tanay')

console.log(tanay.encryptPassword());
console.log(tanay.changeUsername());





// Behind the Scene

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.pass2 = function(){
    return `${this.password}abc`
}


const hiya = new user("hiya", "hiya@gmail.com", "hiyu")
console.log(hiya.pass2());