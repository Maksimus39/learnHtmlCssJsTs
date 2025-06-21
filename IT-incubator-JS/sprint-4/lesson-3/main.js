// this
// Что такое THIS - ключевое слово которое ссылается на объект в контексте которого
// была вызвана функция


// 1. GLOBAL SCOPE
// 2. Function -> arrow function || simple function
// 3. call, apply, bind
// 4. Function constructor


// --------------------------------------------- Global Scope ------------------------------------------------

console.log(this)
console.log(window)
console.log(window === this)

// this - получает в момент инициализации или строка 19-21
const arrowFunc = () => {
    console.log("20-this", this)
}

arrowFunc()


// ----------------------------------------------------------------------------------------------------------
function foo() {
    // this === window
    const arrowFunction2 = () => {
        console.log("31-this", this)
    }
    arrowFunction2()
}

foo()


// -------------------------------------------- this === Window ---------------------------------------------
const foo2 = () => {
    const arrowFunction2 = () => {
        console.log("44-this", this)
    }
    arrowFunction2()
}

foo2()

// ----------------------------------------------------------------------------------------------------------

const user = {
    firstName: "John",
    showName: () => {
        console.log(this.firstName) // ? undefined
    }
}

user.showName()

