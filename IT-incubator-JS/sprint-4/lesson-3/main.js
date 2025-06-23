// this
// Что такое THIS - ключевое слово которое ссылается на объект в контексте которого
// была вызвана функция


// 1. GLOBAL SCOPE
// 2. Function -> arrow function || simple function
// 3. call, apply, bind
// 4. Function constructor


// --------------------------------------------- Global Scope ------------------------------------------------

// console.log(this)
// console.log(window)
// console.log(window === this)
//
// // this - получает в момент инициализации или строка 19-21
// const arrowFunc = () => {
//     console.log("20-this", this)
// }
//
// arrowFunc()


// ----------------------------------------------------------------------------------------------------------

// function foo() {
//     // this === window
//     const arrowFunction2 = () => {
//         console.log("31-this", this)
//     }
//     arrowFunction2()
// }
//
// foo()


// -------------------------------------------- this === Window ---------------------------------------------

// const foo2 = () => {
//     const arrowFunction2 = () => {
//         console.log("44-this", this)
//     }
//     arrowFunction2()
// }
//
// foo2()

// ----------------------------------------------------------------------------------------------------------

// const user = {
//     firstName: "John",
//     showName: () => {
//         console.log(this.firstName) // ? undefined
//     }
// }
//
// user.showName()

// ---------------------------------------------------------------------------------------------------------

// const user2 = {
//     firstName: "John",
//     showName() {
//         console.log(this.firstName) // ? John
//     }
// }
//
// user2.showName()

// ---------------------------------------------------------------------------------------------------------

// const user3 = {
//     firstName: "John",
//     showName() {
//         const foo = () => {
//             console.log(this.firstName)
//         }
//         foo()
//     }
// }
//
// user3.showName()

// ---------------------------------------------------------------------------------------------------------

// const user4 = {
//     firstName: "John",
//     showName() {
//         console.log("user4-88", this.firstName)
//         const foo = function () {
//             console.log("user4-90", this.firstName)
//         }
//         foo()
//     }
// }
//
// user4.showName()

// ---------------------------------------------------------------------------------------------------------

// const user5 = {
//     firstName: "Max",
//     showName: () => {
//         console.log("user4-103", this.firstName)
//         const foo = () => {
//             console.log("user4-105", this.firstName)
//         }
//         foo()
//     }
// }
//
// user5.showName()

// ----------------------------------------------------------------------------------------------------------

// let maxSpeed = 20
//
// const car = {
//     maxSpeed: 200,
//     showMaxSpeed: () => {
//         console.log(this.maxSpeed)
//     }
// }
//
// car.showMaxSpeed()


// -----------------------------------------------------------------------------------------------------------

// let maxSpeed2 = 20
//
// const car2 = {
//     maxSpeed2: 200,
//     showMaxSpeed() {
//         console.log(this.maxSpeed2)
//     }
// }
//
// car2.showMaxSpeed()

// ----------------------------------------------------------------------------------------------------------

// const car3 = {
//     maxSpeed2: 200,
//     showMaxSpeed() {
//         console.log("car3", car3.maxSpeed2)
//     }
// }
//
// car3.showMaxSpeed()

// ----------------------------------------------------------------------------------------------------------

// function showMaxSpeed() {
//     console.log("showMaxSpeed", this.maxSpeed2)  //
// }
//
// const car4 = {
//     maxSpeed2: 20,
// }
//
// const car5 = {
//     maxSpeed2: 10,
// }
//
// car4.func = showMaxSpeed
// car5.func = showMaxSpeed
//
// car4.func()
// car5.func()


// ----------------------------------------------------------------------------------------------------------

// let car3 = {
//     color: 'red',
//     showColor() {
//         (
//             () => {
//                 console.log(this.color)
//             }
//         )()
//     }
// }
//
// car3.showColor()


// ------------------------------------------------- CALL APPLY BIND --------------------------------------------


// const car1 = {
//     brand: "kia",
//     speed: 150,
//     startEngine(color, maxSpeed) {
//         console.log(`start, ${this.brand} ${color} ${maxSpeed}`);
//     },
// };
//
//
// const car2 = {
//     brand: "bmw",
//     speed: 200,
// };
//
//
// // call apply
//
// car1.startEngine.call(car2, 'red', 300)
// car1.startEngine.apply(car2, ['green', 500])
//
//
// // bind
//
// const startEng = car1.startEngine.bind(car2)
// startEng('yellow', 310)

// ------------------------------------------------- ------------- --------------------------------------------

// const scooter = {
//     brand: "honda",
//     speed: 400,
// }
//
//
// const car2 = {
//     brand: "bmw",
//     speed: 200,
//     showMaxSpeed() {
//         (
//             () => {
//                 console.log(this.speed) // 200 - она получила контекст один раз и больше не может переопределиться
//             }
//         ).call(scooter)
//     }
// }
//
// car2.showMaxSpeed() // 200

// ------------------------------------------------- ------------- --------------------------------------------

// const scooter2 = {
//     brand: "honda",
//     speed: 60,
// }
//
//
// const car3 = {
//     brand: "bmw",
//     speed: 200,
//     showMaxSpeed2() {
//         (
//             function () {
//                 console.log(this.speed) // 60
//             }
//         ).call(scooter2)
//     }
// }
//
// car3.showMaxSpeed2() // 60

// ------------------------------------------------- Потеря контекста ------------- ----------------------------

// const car = {
//     brand: "bmw",
//     speed: 200,
//     showMaxSpeed() {
//         console.log(this.speed)
//     }
// }
//
// setTimeout(() => car.showMaxSpeed(), 2000)  // bind - обязательно || callback


// const dialer = {
//     name: 'Toyota',
//     models: ['Yaris', 'Corolla', 'Prado'],
//     showModelsInDialer() {
//         this.models.forEach( (model)=> {
//             console.log(`Dialer: -> ${this.name}, have: -> ${model}`);
//         })
//     }
// }
//
// dialer.showModelsInDialer();


//---------------------------------------------- Function constructor -----------------------------------------

function CarCreator() {
        // {}
        // this = {}
        this.brand = 'bmw'
        // return this
}

console.log("CarCreator", new CarCreator()) // CarCreator {}
console.log("CarCreator", CarCreator())     // undefined

