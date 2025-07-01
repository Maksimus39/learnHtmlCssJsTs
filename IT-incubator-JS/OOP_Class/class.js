class DeleteUserActionTwo {
    constructor() {
        this.type = 'DELETE-USER-TWO'
        this.payload = {
            userIdTWO: this.userIdTWO,
        }
    }
}

const action5 = new DeleteUserActionTwo('123')
console.log("action5", action5)

// ----------------------------------------------------------------------

class User {
    constructor(name, site, dob) {
        this.name = name
        this.site = site
        this.dob = dob
        this.counter = 0
    }
    hello(){
        this.counter++
        console.log(` I am ${this.name}! ${this.site} is ${this.dob}`)
    }
}

const us = new User('Max','NLMK','26.08.1983')
console.log("us",us)

//------------------------------------------------------------------------------


