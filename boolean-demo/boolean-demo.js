console.log(Boolean(1)) //true
console.log(Boolean(0)) //false
console.log(Boolean("Hello")) //true
console.log(Boolean("")) //false
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean({})) //true
console.log(Boolean([])) //false

while (1) {
  console.log("Hello")
}

do {
  console.log("One iteration")
} while (0)

  for (let i = 1; 1; i++) {
    console.log("In for")
    break
  }

let num = 10

while(num) {
  console.log(num)
  num--
}

//&& || !
console.log("Coding" && 7) //truthy && truthy
// truthy && falsy, first falsy -> the first falsy value

console.log("" || "Default") 
// First trithy value or last falsy if all are false

const username = "" || "Default"

let isBtnExists = true
let button = "Button"
const buttonToShow = isBtnExists && button