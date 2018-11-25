// var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Hey. it  didn't worked");
//     }, 2500);


// });

// promise.then((data) => {
//     console.log(`Data is : ${data}`);
//     return "marker";
// }, (data) => {
//     console.log("Marker is :${`marker`}");

// });


//result is coming undefined because the error of first promise is handled
var asyncAdd = (a, b) => {
    console.log("a and b is ", a, b);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {

                resolve(a + b);
            }
            else {
                reject("Arguments aren't numbers");
            }
        }, 2400);

        console.log("in promise");
    });
}
asyncAdd(3, "moti").then((res) => {
    console.log(`Addittion is : ${res}`);
    return asyncAdd(res, 33)
}, (error) => {
    console.log("in catch", error);

}).then((res) => {
    setTimeout(() => {
        console.log("Result is :", res);
    }, 2400);

}, (errorMessage) => {
    console.log("Error chaininig", errorMessage);
}).catch((error) => {

    console.log("error is ", error);
});



//promise chaining  error handling solution
// var asyncAdd = (a, b) => {
//     console.log("a and b is ", a, b);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a === "number" && typeof b === "number") {

//                 resolve(a + b);
//             }
//             else {
//                 reject("Arguments aren't numbers");
//             }
//         }, 2400);

//         console.log("in promise");
//     });
// }
// asyncAdd(3, 55).then((res) => {
//     console.log(`Addittion is : ${res}`);
//     return asyncAdd(res, "33");
// }).then((res) => {
//     setTimeout(() => {
//         console.log("Result is :", res);
//     }, 2400);

// }).catch((error) => {

//     console.log("error is ", error);
// });