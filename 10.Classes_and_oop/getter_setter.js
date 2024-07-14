class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }

    get password(){
        return `${this._password}tanay123`
    }

    set password(value){
        this._password = value
    }
}

const tanay = new User("tanay@gmail.com", "abc")

console.log(tanay.email);
