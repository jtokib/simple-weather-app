console.log("Hello World")

const request = require('request');

let apiKey = "d603505c3413b33ae3c51fa83a381967";
let newKey = "366fdbbd5788848af5eb65a9403b2696"
let city = "san francisco";
let url = "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";

request(url, function(err, response, body) {
    if(err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        // let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
        console.log('body:', body);
    }
})

