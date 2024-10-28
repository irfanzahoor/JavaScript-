function setUsername(userName) {
    this.userName = userName;
}

function createUser(userName, email, password) {
    setUsername(userName) //this is not called only we sent refrence
    setUsername.call(this, userName)
    this.emial = email;
    this.password = password
}

const userOne = new createUser("IrfanZahoor", "IrfanZahoor@gmail.com", "hello")
console.log(userOne)