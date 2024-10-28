// fetching user data from jsonplaceholder

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error")
    }
}
getAllUsers()