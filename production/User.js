class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.hasSomethingBeenDone = false;
    }

    doSomething() {
        this.hasSomethingBeenDone = true;
    }
}

export default User;