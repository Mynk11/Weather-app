var request = require('request');
var geocode = (address) => {
    return new Promise((resolve, reject) => {
        var latitude = 18.573711;
        var longitude = 73.77682399999999;
        var objlan = {
            latitude: 18.573711,
            longitude: 73.77682399999999
        }
        var myJson = "https://api.myjson.com/bins/lv884";

        request({ url: `https://api.myjson.com/bins/lv884`, json: true }, (error, response, body) => {
            if (response.statusCode == 200) {
                console.log(`successfrom geocode.js :${response.statusCode}`);
                resolve(objlan);
            }
            else {
                console.log(`successfrom geocode.js :${response.statusCode}`);
                reject("link isn't working");
            }
        });

    });
};


geocode().then((obj) => {
    console.log("promise :latitiude and latiude is ", obj.latitude, obj.longitude);
}, (error) => {
    console.log("Error is :", error);
});