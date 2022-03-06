 const handLePromtse = (promise) => {

     return promise
         .then((data) => [null, data])
         .catch((error) => [error, undefined]);

 };

 module.exports = handLePromtse;