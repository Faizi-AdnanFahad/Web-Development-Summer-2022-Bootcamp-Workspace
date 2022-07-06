/*==========================================================================*/
// BEFORE INHERITANCE

// class Cat {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return this.name + ' is eating';
//     }

//     meow() {
//         return "MEOOWWWW";
//     }
// }

// class Dog {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return this.name + ' is eating';
//     }

//     bark() {
//         return 'WOOOOOOFFFFF';
//     }
// }

/*==========================================================================*/
// AFTER INHERITANCE
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return this.name + ' is eating';
    }
}

class Cat extends Pet {

    constructor(name, age, livesLeft) {
        super(name, age);
        this.livesLeft = livesLeft;
    }

    meow() {
        return "MEOOWWWW";
    }

}

class Dog extends Pet {

    bark() {
        return 'WOOOOOOFFFFF';
    }
}
