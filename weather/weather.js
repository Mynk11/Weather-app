const request = require('request');




var getWeather = (latitude, longitude, callback) => {
    console.log("LATITUTDE IS :" + latitude, longitude);
    var darkSky = "https://api.darksky.net/forecast/d948a4c240d15938e6388329b761b1f0/18.573711,73.77682399999999";
    request({ url: `https://api.darksky.net/forecast/d948a4c240d15938e6388329b761b1f0/${latitude},${longitude}`, json: true }, (error, response, body) => {
        if (response.statusCode === 200) {

            console.log(`success is callled:${response.statusCode}`);
            callback(undefined, response);

            //console.log(JSON.stringify(response, undefined, 2));//2->spacing
        }
        else {
            console.log("Error for Weather.js", error);
            var er = "error in weather link";
            callback(er);
            //console.log(`success :${response.statusCode}`);
        }

    });

}





// var encodeAddress = encodeURIComponent(argv.address);
// console.log("Encoded address is :", encodeAddress);

module.exports = {
    getWeather
}