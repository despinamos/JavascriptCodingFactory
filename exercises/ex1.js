const myName = "Despoina"
console.log("Hello, ", myName);

const num1 = 15
const num2 = 33
const sum = num1 + num2

console.log("The sum of ", num1, num2, " is ", sum)

const isTrue = true;

console.log(isTrue ? "It's true!" : "It's false!");

const cities = ["Athens", "London", "Amsterdam"]

cities.push("Tokyo")

for (const city of cities) {
  console.log(city)
}

const user = {name: "Aira",
  age: 20,
  city: "Amsterdam"
}

for (const property in user) {
  console.log(property, user[property])
}

function hello(user) {
  console.log("Hello ", user.name)
}

hello(user)