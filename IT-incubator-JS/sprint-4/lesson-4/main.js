//  __proto__ это свойство есть у каждого обьекта и является
// ссылкой на prototype класса или
// функции конструктора, с помощью которого/которой был создан
// данный объект.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// __proto__ && prototype

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//     this.state = {};
//   }

//   startEngine() {
//     console.log(`start ${this.brand}`);
//   }

//   stopEngine = () => {
//     console.log(`stop ${this.brand}`);
//   };
// }

// const car1 = new Car("bmw", 200);
// const car2 = new Car("bmw", 200);

// console.log(car1 === car2); // false
// console.log(car1.brand === car2.brand); // true
// console.log(car1.state === car2.state); // false
// console.log(car1.startEngine === car2.startEngine); // true
// console.log(car1.stopEngine === car2.stopEngine); // false

// const str = new String("str");
// const str1 = "str";
// const str2 = "str";

// console.log(str1 === str2); // true
// console.log(str1.__proto__ === String.prototype); // true
// console.log(str1 === str2);

// const num = 10;

// console.log(num.__proto__ === Number.prototype);

// const arr = []

// console.log(arr.__proto__ === Array.prototype)

// const obj = {};

// console.log(obj.__proto__ === Object.prototype);

// const foo = () => {};

// console.log(foo.__proto__ === Function.prototype);

// function foo() {}
// const foo = () => {};

// const f1 = new foo();

// console.log(f1);
// console.dir(foo);

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//     this.state = {};
//   }

//   startEngine() {
//     console.log(`start ${this.brand}`);
//   }

//   stopEngine = () => {
//     console.log(`stop ${this.brand}`);
//   };
// }

// const car1 = new Car("bmw", 200);
// const car2 = new Car("bmw", 200);

// car1.startEngine();

// Car.prototype.startEngine = function () {
//   console.log(`start ${this.brand}!!!!`);
// };

// car1.startEngine();

// console.log(car1.__proto__ === Car.prototype);
// console.log(car1.__proto__.__proto__.__proto__ === null);

// car1.foo();

// const user = {
//   name: "bob",
//   address: {
//     city: "london",
//     country: "uk",
//   },
// };

// console.log(user.address.__proto__ === Object.prototype);

// console.log(Car.__proto__ === Function.prototype);
// console.log(Array.__proto__ === Function.prototype);
// console.log(String.__proto__ === Function.prototype);
// console.log(Number.__proto__ === Function.prototype);
// console.log(Date.__proto__ === Function.prototype);

// console.log(Function.__proto__ === Function.prototype);

// ------------------------------

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   startEngine() {
//     console.log(`start ${this.brand}`);
//   }

//   static compareCars(car1, car2) {
//     if (car1.speed > car2.speed) {
//       console.log(`${car1.brand} is faster than ${car2.brand}`);
//     } else {
//       console.log(`${car2.brand} is faster than ${car1.brand}`);
//     }
//   }
// }

// class SuperCar extends Car {
//   constructor(brand, speed, canFly) {
//     super(brand, speed);
//     this.canFly = canFly;
//   }

//   fly() {
//     console.log(`${this.brand} is flying`);
//   }
// }
// -------------------------------
function Car(brand, speed) {
  // {}
  this.brand = brand;
  this.speed = speed;
}

Car.prototype.startEngine = function () {
  console.log(`start ${this.brand}`);
};

Car.compareCars = function (car1, car2) {
  if (car1.speed > car2.speed) {
    console.log(`${car1.brand} is faster than ${car2.brand}`);
  } else {
    console.log(`${car2.brand} is faster than ${car1.brand}`);
  }
};

const car1 = new Car("bmw", 200);
const car2 = new Car("kia", 220);

// CarCreator.compareCars(car1, car2);

function SuperCar(brand, speed, canFly) {
  Car.call(this, brand, speed);
  this.canFly = canFly;
}

SuperCar.prototype.fly = function () {
  console.log(`${this.brand} is flying`);
};

const superBmw = new SuperCar("superBmw", 400, true);
const superBmw1 = new SuperCar("superBmw", 420, true);

// SuperCar.prototype.__proto__ = Car.prototype;
// SuperCar.__proto__ = Car;

Object.setPrototypeOf(SuperCar.prototype, Car.prototype);
Object.setPrototypeOf(SuperCar, Car);

// console.log(superBmw);
// superBmw.fly();
superBmw.startEngine();
// console.log(superBmw.__proto__.__proto__ === Object.prototype);
SuperCar.compareCars(superBmw, superBmw1);

console.log(superBmw);
