// push pop shift unshift

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const result = numbers.push(13);
console.log("result:", result);
console.log("numbers:", numbers);


const res = numbers.push(14, 15)
console.log("res:", res)

// ---------------------------------------------------
function arrPush(array, el1) {
    array[array.length] = el1
    return array.length
}

console.log(arrPush(numbers, 16))
console.log(numbers)

// ---------------------------------------------------

function arrPushStrong(array, ...elem) {  // rest
    for (let i = 0; i < elem.length; i++) {
        array[array.length] = elem[i]
    }
    return array.length
}

console.log(arrPushStrong(numbers, 17, 18, 19, 20))
console.log(numbers)

// ---------------------------------------------------- удаляем последний элемент ----------------------------

function popArray(arr) {
    const lastEl = arr[arr.length - 1]
    arr.length = arr.length - 1;
    return lastEl
}

console.log(popArray(numbers))
console.log(numbers)

// -----------------------------------------------------------------------------------------------------------

function shift(array) {
    const firstElement = array[0]
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1]
    }
    array.length = array.length - 1
    return firstElement
}

console.log(shift(numbers))
console.log(numbers)

// -----------------------------------------------------------------------------------------------------------

function unshift(array, el) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1]
    }
    array[0] = el
    return array.length
}

console.log(unshift(numbers, 1))
console.log(numbers)

// ----------------------------------------------------------------------------------------------------------
const num = [1, 2, 3, 4, 5, 6];

function reverseArray(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = temp;
    }
    return array;
}

console.log(reverseArray(num));
