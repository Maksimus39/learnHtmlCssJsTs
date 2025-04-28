const arr = [1, 2, 3, 4, 5, 6]
// const arr2 = new Array(1, 2, 3, 4, 5)
//
//
// // arr.push = function () {
// //     console.log("Я не тот push!!!")
// // }
//
// console.log(arr)
// console.log(arr2)
//
// console.log(arr===arr2)
//
// console.log(Array.prototype)
// console.log(arr2.__proto__)


// ---------------------------------------------------------------------
// Метод  map

Array.prototype.myMap = function forMap(callback) {
    const result = []
    for (let index = 0; index < this.length; index++) {
        result[index] = callback(this[index]);
    }
    return result
}

console.log(arr.myMap(n => n ** 5))
const bigNumbers = arr.myMap(n => n ** 5)
console.log(bigNumbers)
// ------------------------------------------------------------------------

// Метод filter
Array.prototype.myFilter = function (callback) {
    const result = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            result.push(this[i])
        }
    }
    return result
}

console.log("bigNumbers:", bigNumbers.myFilter(n => n > 1000))




