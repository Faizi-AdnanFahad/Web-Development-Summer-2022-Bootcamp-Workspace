// Our first Object in JavaScript

const person = {
    firstName: 'Ali',
    lastName: 'Hamid'
};

const ali = {
    favColor: 'Blue',
    favNumber: 10,
    brothers: ['Ali', 'Karim'],
};

console.log(ali.brothers[0]);

// Object access
// Dot notation
console.log(ali.favColor);

// Square bracket notation -> ability to use expression as the object keys
console.log(ali['fav' + 'Color'])