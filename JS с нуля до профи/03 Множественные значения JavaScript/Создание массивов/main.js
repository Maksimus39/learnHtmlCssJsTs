// arr1 = new Array("purple", "green", "yellow");
// arr2 = ["black", "orange", "pink"];
//
// console.log("arr1:", arr1);
// console.log("arr2:", arr2);
//
// arr3 = new Array(10);
// arr4 = [10];
//
// console.log("arr3:", arr3);
// console.log("arr4:", arr4);
//
//
// let arr = ["hi there", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);


// Доступ к элементам

// cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);


// Перезапись элементов

// cars[0] = "Tesla";
// console.log(cars[0]);
//
// console.log(cars)

// Встроенное свойство длины

// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// Практическое занятие 3.1

// const purchases = ["Milk", "Bread", "Apples"]
// console.log(purchases);
// purchases[1] = "Bananas"
// console.log(purchases)

// Практическое занятие 3.2

// const myList = ["Milk", "Bread", "Apples"]
// console.log(myList);
// myList.splice(1,1,"Bananas","Eggs");
// console.log(myList);
// const removeItems = myList.pop()
// console.log(removeItems);
// console.log(myList);
// myList.sort()
// console.log(myList);
// console.log(myList.indexOf("Milk"))
// console.log(myList);
// myList.splice(1,0,"Carrots","Lettuce")
// console.log(myList);
// newArr = ["Juice","Pop"]
// console.log(newArr);
// const finalArr=myList.concat(newArr,newArr);
// console.log(finalArr);
// console.log(finalArr.lastIndexOf("Pop"))

// ------------------------------------------------------------ Многомерные массивы ---------------------------


// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log(arrOfArrays);

// Доступ ко второму элементу третьего массива

// const threeArrays = someValues3[1]
// console.log("threeArrays", threeArrays);  // 3 - 8

//

// arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// console.log("arrOfArraysOfArrays", arrOfArraysOfArrays);


// Извлечем средний элемент этого массива со значением 5, принадлежащим второму
// массиву массивов. Это делается так:

// let middleValue = arrOfArraysOfArrays[1][1][1];
// console.log("middleValue", middleValue);


// ----------------------------------------------------------------------------------------------------------------------------------------------
// Практическое занятие 3.3
// 1. Создайте массив, содержащий три значения: 1, 2 и 3.
// 2. Трижды вложите исходный массив в новый массив.
// 3. Выведите на экран значение 2 из любого массива.

// const arr = [1, 2, 3]
// console.log("arr", arr)
//
// const newArr = [arr, arr, arr]
// console.log("newArr", newArr)
//
// const findNumber = newArr[2][1]
// console.log("findNumber", findNumber)

// -----------------------------------------------  Объекты в JavaScript ------------------------------------------------------------------------

// let arr = [0, 1, 2];
// console.log(typeof arr);
//
// const dog = {
//     dogName:'JavaScript',
//     weight:2.4,
//     color:'brown',
//     breed: "chihuahua",
//     age: 3,
//     burglarBiter: true
// }
//
// console.log(dog)
//
// const dogColor = dog["color"]
// console.log(dogColor)
//
// const dogAge = dog.age
// console.log(dogAge)

// -------------------------------------------- Обновление объектов ----------------------------------------------------------------------------

// dog["color"] = 'red'
// console.log(dog.color)


// -------------------------------------------- Практическое занятие 3.4 ----------------------------------------------------------------------------

// 1. Создайте новый объект myCar для описания автомобиля. Добавьте не-
// сколько свойств, включая make и model (не ограничивайтесь только ими),
//
// и значения, характерные для любого или вашего автомобиля. Смело ис-
// пользуйте логические значения, строки или числа.
//
// 2. Создайте переменную color, которая может содержать значение типа
// string. Эта переменная теперь может использоваться для ссылки на имя
//
// свойства объекта myCar. Затем включите переменную в квадратные скоб-
// ки, чтобы присвоить новое значение цвета для myCar.
// 3. Возьмите ту же переменную и назначьте ей новое свойство типа string,
// например forSale. Снова используйте скобки, чтобы присвоить значение
// свойству forSale, указывающее, выставлен ли автомобиль на продажу.
// 4. Выведите make и model на экран.
// 5. Выведите значение forSale на экран.

// const myCar = {
//     brand: 'bmw',
//     speed: 200,
//     isFavourite: true,
//     color: 'red'
// }
// console.log("myCar", myCar)
//
// myCar["color"] = "blue"
// console.log("myCar", myCar)
//
// myCar["color"] = "forSale"
//
//
// console.log(myCar.brand + myCar.isFavourite)


// -------------------------------------------------- Работа с объектами и массивами -----------------------------------------------------------------

// str-83