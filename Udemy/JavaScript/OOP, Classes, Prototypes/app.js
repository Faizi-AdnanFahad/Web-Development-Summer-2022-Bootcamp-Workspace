// Prototypes are the mechanism by which JavaScript objects inherit features from one another. Acts as a template object 

// __proto__ is a reference to the prototype

// console.log(Array.prototype) // Shows all the methods that are available for every instance of Array objects

/*======================================================================================================================*/
// We can add our methods to the prototype of an oject so each instance of that object has access to the method we added.

String.prototype.test = function() {
    console.log('hi');
}

// console.log(String.prototype) // test method is now added and is accessible to each instance of an Array.

// console.log("okayy".test()); // will print 'hi' to the console.

Array.prototype.shout = function() {
    return 'OOOOOHOOHOOHOHOOH';
}

a = [1, 2].shout();
console.log(a) // OR console.log([1, 2].shout())
/*======================================================================================================================*/