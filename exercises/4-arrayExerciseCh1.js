const numbers = [ 6, 4, 3, 2, -9, 8, 10 ]

// 1

const mapArr = numbers.map((x) => x * 2)
console.log(mapArr)

// 2

const filterArr = numbers.filter((x) => x % 2 === 0)
console.log(filterArr)

//3

const somePositive = numbers.some((x) => x > 0)
console.log(somePositive)

//4

const everyPositive = numbers.every((x) => x > 0)
console.log(everyPositive)