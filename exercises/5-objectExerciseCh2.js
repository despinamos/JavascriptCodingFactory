const objectArr = [
 {
  name: "Aira",
  age: 20,
  occupation: "healer assistant"
 },
 {
  name: "Neev",
  age: 20,
  occupation: "druid"
 },
 {
  name: "Chaska",
  age: 41,
  occupation: "healer"
 }
]

// 1

const filteredArr = objectArr.filter((obj) => obj.age < 30)
console.log(filteredArr)

// 2

const mapArrNames = objectArr.map((obj) => obj.name)
console.log(mapArrNames)