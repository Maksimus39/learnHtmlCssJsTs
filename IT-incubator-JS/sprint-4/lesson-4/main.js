// learn prototype

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    greet() {
        console.log('Hi there!')
    }
}

Person.prototype.introduce = function () {
    console.log('Hi, I`m', this.firstname)
}

Person.prototype.introduceTwo = function () {
    console.log('Hi, I`m', this.lastname)
}

Person.prototype.favoriteColor = 'green'

const p = new Person('Maria', 'Saga')
console.log(p.favoriteColor)
p.introduce()
p.greet()
p.introduceTwo()