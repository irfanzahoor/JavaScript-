let p = fetch("https://goweather.herokuapp.com/weather/Ny");

p.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();   //first then return another promise
}).then((value2) => {
    console.log(value2);  //2nd then print value of ftech api
})

/*
1.After we make the request using fetch, we use the then method to handle the response.
2.Inside the callback function of then, we take the response object and call the json() method on it.
3.The json() method returns another promise that resolves with the JSON representation of the response body.
4.We return this promise from the first then function. This means the next then will wait for this promise to be resolved before executing.
5.In the next then, we have access to the parsed JSON data, represented by value2.
6.We log value2, which contains the weather information received from the API in JSON format.
*/