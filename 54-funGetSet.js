// getter setter in prototype

function User(email, password) {
    this._email = email
    this._password = password


    Object.defineProperty(this, "email", {
        get: function () {
            return this._email
        },
        set: function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, "password", {
        get: function () {
            return this._password
        },
        set: function (value) {
            this._password = value
        }
    })
}

const objOne = new User("happy@happy.com", "1234")
console.log(objOne.email)

objOne.email = "happy2@happy.com"
console.log(objOne.email)


