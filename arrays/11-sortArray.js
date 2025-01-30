const cities = ["Paris", "London", "Berlin", "Amsterdam"]
const number = [5, 6, 22, 89, 101, 24]

console.log(cities.sort()) // sorts out the strings correctly
console.log(number.sort()) // doesn't work because it
                          // sorts with ascii code

// number.sort(function(a, b) {
//   if (a > b) return 1
//   if (a < b) return -1
//   if (a === b ) return 0
// })

number.sort(function(a,b) {
  return a - b;
})

console.log(number)
console.log(number.reverse())