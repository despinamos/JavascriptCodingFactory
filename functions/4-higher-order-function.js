// Higher-order functions
// Function factory
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier
  }
}

const createMultiplierr = (multiplier) => (num) => num * multiplier

const double = createMultiplier(2)
const triple = createMultiplierr(3)
console.log(double(5))
