const request = require('request');
const yargs = require('yargs');
const getWeather = require('../weather/weather.js');
function geocodeAddress(callback) {
    var latitude = 18.573711;
    var longitude = 73.77682399999999;
    var objlan = {
        latitude: 18.573711,
        longitude: 73.77682399999999
    }
    var myJson = "https://api.myjson.com/bins/lv884";
    //json:true means josn aa ra h usko js object me convert krna h
    request({ url: `https://api.myjson.com/bins/lv884`, json: true }, (error, response) => {
        if (response.statusCode === 200) {

            console.log(`success from geocode.js :${response.statusCode}`);
            callback(undefined, objlan);
        }
        else {

            console.log(`Error from geocode.js :${response.statusCode}`);
            var er = "link isn't working";
            callback(er);
        }

    });
}
module.exports = {
    geocodeAddress
}