class User {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}

const objOne = new User("happy@happy.com", "1234");
console.log(objOne.email);

objOne.email = "happy2@happy.com";
console.log(objOne.email); 