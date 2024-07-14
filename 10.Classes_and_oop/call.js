function SetUserName(username){
    // Complex DB Calls

    this.username = username
}

function createUser(username, email, password) {
    SetUserName.call(this, username)
    this.email = email
    this.password = password
}

const tanay = new createUser("tanay", "tanay@gmail.com", "tanay@82629")
console.log(tanay);