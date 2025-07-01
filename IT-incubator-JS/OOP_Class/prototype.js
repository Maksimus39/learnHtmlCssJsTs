function DeleteUserAction(userID) {
    // this = {}
    this.type = 'DELETE-USER'
    this.payload = {
        userId: userID,
    }
}

const action3 = new DeleteUserAction(567)
const action4 = new DeleteUserAction('4444')

console.log(action3)
console.log(action4)


// --------------------------------------------------------------------------


function User(name, site, dob) {
    this.name = name
    this.site = site
    this.dob = dob
}

User.prototype.hello = function () {
    console.log(` I am ${this.name}! ${this.site} is ${this.dob}`)
}

const us1 = new User('Max','NLMK','26.08.1983')

us1.hello()
