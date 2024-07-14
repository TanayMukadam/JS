class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tanay = new Teacher("tanay", "tanay@gmail.com", "tanay")

tanay.addCourse()

const hiya = new User("hiya")

hiya.logMe()

tanay.logMe()