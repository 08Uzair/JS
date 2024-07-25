//                  Promise
//                      |
//                     / \
//            RESOLVE()   REJECT()
//              |           |
//            then()      catch()


let complete = 1;
let prom = new Promise((resolve, reject) => {
    if (complete > 3) {
        resolve("It is Greater than 3 ")
    }
    else {
        reject("It is lesser than 3")
    }
})

console.log(prom)