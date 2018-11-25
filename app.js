const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs.option({
    a: {
        demand: true,
        alias: "address",
        descride: "Address to fetch weather for",
        string: true

    }
}).help().alias("help", 'h').argv;
console.log("arguments is :", argv);
console.log("argv is :", argv.address);
geocode.geocodeAddress((errorMessage, results) => {


    if (errorMessage) {
        console.log("errorMessage is :" + errorMessage);
    } else {
        console.log("Results is :", JSON.stringify(results, undefined, 2));
        console.log(results.latitude, results.longitude);
        weather.getWeather(results.latitude, results.longitude, (error, success) => {
            if (error) {
                console.log("Error is from app.js getWeather:")
            } else {
                console.log("type of success is :", typeof (success));
                //console.log(`resObject.longitude ${Object.keys(success.body.currently.time).length}`);
                console.log(`resObject.longitude ${Object.keys(success.body.currently).forEach((key) => console.log(`${key} :: ${success.body.currently[key]}`))}`)

            }
        });

    }
});