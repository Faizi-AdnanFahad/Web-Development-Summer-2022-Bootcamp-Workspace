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
// console.log(a) // OR console.log([1, 2].shout())
/*======================================================================================================================*/
// Factory Functions 

//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"

/*======================================================================================================================*/
// Constructor

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b; 
    // returns this
}

let c = new Color(1, 2, 4);
console.log(c);
