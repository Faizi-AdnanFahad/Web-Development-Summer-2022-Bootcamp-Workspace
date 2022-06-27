// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1',
//     // SUCCESS V1
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             // SUCCESS V2
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     // SUCCESS V3
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     // FAILURE V3
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             // FAILURE V2
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, 
//     // FAILURE V1
//     function (err) {
//         console.log("ERROR!!!", err)
//     })



// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// // THE CLEANEST OPTION WITH THEN/CATCH
// // RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => { // It runs only if the first .then is successful.
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => { // it runs if any one of the .then was unsuccessful.
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })

/*====================================================================*/
/* The color example with Promises */

function delayedColorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            document.body.style.backgroundColor = color;
            resolve(); // no logical reason for having a reject.
        }, 1000);
    })
}

delayedColorChange('red', 1000)
    .then(() => {
        return delayedColorChange("blue", 1000);
    })
    .then(() => {
        return delayedColorChange("green", 1000);
    })
    .then(() => {
        return delayedColorChange("yellow", 1000);
    })
/*====================================================================*/