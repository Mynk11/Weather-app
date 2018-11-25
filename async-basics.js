// console.log('starting-app');
// setTimeout(() => console.log("twenty two"), 2000);
// setTimeout(() => console.log("twenty three"), 0);
// console.log('Finishing up');

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "vikram"

    };
    setTimeout(() => {
        callback(user);
    }, 3000);
    //printing all the keys of an object
    console.log("The length of object key is :", Object.keys(user).length);
    Object.keys(user).forEach((key) => console.log("Name and Id:", key, user[key]));
    //callback(user);
};

getUser(54, (userObject) => {
    //console.log(userObject);
})