const yargs = require('yargs');
const axios = require('axios');
const argv = yargs.option({
    a: {
        demand: true,
        alias: "address",
        descride: "Address to fetch weather for",
        string: true

    }
}).help().alias("help", 'h').argv;
console.log("argv is :", argv);

var geocodeUrl = "https://api.darksky.net/forecast/d948a4c240d15938e6388329b761b1f0/18.573711,73.77682399999999";
var myJson = "https://api.myjson.com/bins/lv884";
axios.get(myJson).then((res) => {
    if (res.status === 200) {
        console.log(res.statusText);
        return axios.get(geocodeUrl)
    }
    else {
        console.log("called");
        throw new Error('Unable to call api');
    }
}).then((response) => {

    console.log("response from geocde is :", response.status);


}).catch((error) => {
    if (error.code === "ENOTFOUND") {
        console.log("Message Error is:", error.message);

    }
    else {
        console.log("Error from axioms is :", error);
    }

});
