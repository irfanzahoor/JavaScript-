let options = {
    method: "POST",
    headres: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title: 'Babar Azam',
        body: 'Captian',
        userId: 56,
    })
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response) => response.json())
    .then((json) => console.log(json));