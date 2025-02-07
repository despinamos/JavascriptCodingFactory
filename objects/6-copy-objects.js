const initial = { name: "Alice", age: 30, address: {street: "Patission", num: 76}}

// 1. With Spreading. Spread operator gives a shallow copy.
const copyInitial = {...initial}
console.log(copyInitial)

// 2. Object type
const copyInitial2 = Object.assign({}, initial)

// 3. With JSON function
// cannot copy objects that contain functions in their body
// or objects with undefined properties
const copyInitial3 = JSON.parse(JSON.stringify(initial))

// 4. Deep copy

const copyInitial4 = structuredClone(initial)