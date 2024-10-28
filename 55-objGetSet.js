let User = {
    _email: "happy@happy.com",
    _password: "1234",

    get email() {
        return this._email;
    },
    set email(value) {
        this._email = value;
    },
    get password() {
        return this._password;
    },
    set password(value) {
        this._password = value;
    }
}