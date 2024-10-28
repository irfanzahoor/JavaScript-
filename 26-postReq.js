const createPlayer = async (player) => {

    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(player),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response;
}

const getPlayer = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
    let r = await response.json();
    return r;
}

const mainFun = async () => {
    let player = {
        title: 'Babar Azam',
        body: 'Captian',
        userId: 56,
    }
    console.log(await createPlayer(player));

    console.log(await getPlayer(5))
}

mainFun();