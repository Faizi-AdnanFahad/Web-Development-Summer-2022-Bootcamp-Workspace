// // async function hello() {
// // }


// const sing = async () => {
//     // throw "OH NO, PROBLEM!" // Promise Fails
//     // return 'LA LA LA LA' // Promise Succeeds
// } // Returns a function

// sing()
//     .then(data => { // Because promise was succeed do this
//         console.log("PROMISE RESOLVED WITH:", data) 
//     })
//     .catch(err => {
//         console.log("OH NO, PROMISE REJECTED!")
//         console.log(err)
//     })




// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'corgifeetarecute') return 'WELCOME!'
//     throw 'Invalid Password'
// }

// login('todd', 'corgifeetarecute')
//     .then((msg) => {
//         console.log("LOGGED IN!")
//         console.log(msg)
//     })
//     .catch((err) => {
//         console.log("ERROR!")
//         console.log(err)
//     })


// /*===============================================================*/



// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


// async function rainbow() { // await only works inside async functions
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000) // waits for the first promise to be completed
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
//     return "ALL DONE!" // a SUCCESS
// }

// rainbow().then((msg) => { // Chain further
//     console.log("END OF RAINBOW!");
//     console.log(msg);
// })


// async function printRainbow() {
//     await rainbow();
//     console.log("END OF RAINBOW!")
// }

// printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
/*===============The result of await can be stored in a variable===============*/
async function test() {
    let result = await fakeRequest('/www.google.com');
    console.log(result); // test() should be run in console.
    console.log("hi"); // does not gets printed if the result gets a rejection. We can take care of that with a try-catch block as shown below.
}
/*==============================*/

/*===============HANDLING THE REJECTION===============*/
// async function makeTwoRequests() {
//     try {
//         let data1 = await fakeRequest('/page1');
//         console.log(data1);
//         let data2 = await fakeRequest('/page2');
//         console.log(data2);
//     } catch (e) {
//         console.log("CAUGHT AN ERROR!")
//         console.log("error is:", e)
//     }

// }
