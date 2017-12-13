var isGuyReady = true;
var noOfKnacks = 20;

// Promise
var willMarryBae = new Promise(
    function (resolve, reject) {
        if (isGuyReady && (noOfKnacks > 5)) {
            var propose = {
                ring: 'Diamond',
                cost: 1000
            };
            resolve(propose); // fulfilled
        } else {
            var reason = new Error('Guy is not ready');
            reject(reason); // reject
        }

    }
);

var remindGuy = function(){
  willMarryBae.then(function (answer){
    console.log(answer);
  }).catch( function (error){
    console.log(error.message)
  });
}

remindGuy();




