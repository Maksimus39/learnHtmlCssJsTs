const todolistId_1 = crypto.randomUUID()
const todolistId_2 = crypto.randomUUID()

const todolist = [
    {
        id: todolistId_1,
        title: "What to learn",
        filter: "all",
    },
    {
        id: todolistId_2,
        title: "What to buy",
        filter: "all",
    },
]

const tasks = {
    [todolistId_1]: [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: true},
        {id: 4, title: "TS", isDone: true},
    ],
    [todolistId_2]: [
        {id: 5, title: "HTML", isDone: true},
        {id: 6, title: "CSS", isDone: true},
        {id: 7, title: "JS", isDone: true},
        {id: 8, title: "TS", isDone: true},
    ]
}
console.log(todolist)
console.log(tasks)
console.log(todolistId_1)
console.log(todolistId_2)


console.log(typeof todolistId_1)
console.log(typeof todolistId_2)
console.log("todolist:", typeof todolist)

// CRUD

let nextTodos;
let nextTasks
const addTodolist = (title) => {
    const todolistId_3 = crypto.randomUUID()
    const newTodo = {id: todolistId_3, title: title, filter: "all"}
    nextTodos = [...todolist, newTodo]
    nextTasks = {...tasks, [todolistId_3]: []}
}

addTodolist("What to read")
console.log(nextTodos)
console.log(nextTasks)

const changeTasksStatus = (todolistId, taskId, newStatus) => {
    const todolistTasks = tasks[todolistId]
    const nextTodolistTasks = todolistTasks.map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
    nextTasks = {...tasks, [todolistId]: nextTodolistTasks}
}

changeTasksStatus(todolistId_2, 8, false)
console.log("nextTasks:", nextTasks)

const deleteTask = (todolistId, taskId) => {
    nextTasks = {...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)}
}
deleteTask(todolistId_2, 8)
console.log("nextTasks:", nextTasks)

// Object.keys
console.log(Object.keys(nextTasks))
console.log(Object.values(nextTasks))
console.log(Object.entries(nextTasks))


// Object.map
const map = new Map()
map.set("name", "Bob")
map.set(true, "Max")
map.set([1, 2, 3, 4], function () {

})
console.log(map.keys());

// Object.set
const arr = [3, 3, 4, 4, 5, 5, 5, 5, 5]
const set = new Set(arr)
console.log(typeof set)
console.log(set)

const unikArray=Array.from(set)
console.log(unikArray)
console.log(typeof unikArray)






