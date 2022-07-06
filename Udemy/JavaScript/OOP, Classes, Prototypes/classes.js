// class Color {

//     /* Constructor */
//     constructor(r, g, b, name) {
//         // console.log("This Constructor always runs first before anything else.");
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.colorName = name;
//         // The left side are the attributes while the right side are the arguemnts passed in constructor
//     }

//     // Methods
//     colorDescription() {
//         console.log('The color is ' + this.colorName);
//     }

//     // Accessor Method
//     // Returns the rgb representation of a color
//     rgb() {
//         return `rgb(${this.innerRGB()})`;
//     }

//     rgba(a = 1.0) {
// 		return `rgba(${this.innerRGB()}, ${a})`;
// 	}

//     // Returns the hex representation of a color
//     hex() {
// 		return (
// 			'#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1)
// 		);
// 	}
    
//     // Helper Method
//     innerRGB() {
// 		return `${this.r}, ${this.g}, ${this.b}`;
// 	}
// }

// let blackColor = new Color(0, 0, 0, 'Black'); //The color is Black
// console.log(blackColor.colorDescription());
// console.log(blackColor.rgb()); //rgb(0, 0, 0)
// console.log(blackColor.hex());
// console.log(blackColor.rgba());



// let whiteColor = new Color(256, 256, 256, 'white'); //The color is Black
// console.log(blackColor.hex === whiteColor.hex); // true -> Different instances of the color refers to the same methods
