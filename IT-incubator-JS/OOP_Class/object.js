const deleteUser = (userId) => {
    return {
        type: 'DELETE-USER',
        payload: {
            userId: userId,
        }
    }
}

const action1 = deleteUser('1111')
const action2 = deleteUser('2222')

console.log(action1)
console.log(action2)

// ------------------

const userFabric = (name) => {
    return {
        name: name,
        site: 'IT-INCUBATOR',
        dateOfBirth: new Date(Date.now()).toLocaleDateString('en-US'),
        hello() {
            console.log(`Hello, ${this.name}! from ${this.site}`)
        }
    }
}

const user1 = userFabric('MAX')
console.log("user1",user1)

user1.hello()




