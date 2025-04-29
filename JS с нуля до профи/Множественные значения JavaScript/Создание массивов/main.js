arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];

console.log("arr1:", arr1);
console.log("arr2:", arr2);

arr3 = new Array(10);
arr4 = [10];

console.log("arr3:", arr3);
console.log("arr4:", arr4);


let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);


// Доступ к элементам

cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);


// Перезапись элементов

cars[0] = "Tesla";
console.log(cars[0]);

console.log(cars)

// Встроенное свойство длины

colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

// Практическое занятие 3.1

const purchases = ["Milk", "Bread", "Apples"]
console.log(purchases);
purchases[1] = "Bananas"
console.log(purchases)

// Практическое занятие 3.2

const myList = ["Milk", "Bread", "Apples"]
console.log(myList);
myList.splice(1,1,"Bananas","Eggs");
console.log(myList);
const removeItems = myList.pop()
console.log(removeItems);
console.log(myList);
myList.sort()
console.log(myList);
console.log(myList.indexOf("Milk"))
console.log(myList);
myList.splice(1,0,"Carrots","Lettuce")
console.log(myList);
newArr = ["Juice","Pop"]
console.log(newArr);
const finalArr=myList.concat(newArr,newArr);
console.log(finalArr);
console.log(finalArr.lastIndexOf("Pop"))
