const a = "Введите катет A:"
const b = "Введите катет B:"

const resA = prompt(a)
const resB = prompt(b)

const result =Math.sqrt(resA ** 2 + resB ** 2)

const isConfirmed = confirm(Number(result));
console.log(isConfirmed)