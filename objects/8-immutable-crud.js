const obj = { id: 1, firstname: "Alice" }

// Add properties

// Modify the object
obj.lastname = "W."
console.log(obj)

// Immutable - fresh copy
const addToObj = (obj, field, value) => ( {...obj, [field]: value} )
const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy)

//Update the object

// Modifies / updates the copy
obj.firstname = "Athana"
console.log(obj)

// Immutable - fresh copy
const updateObj = (obj, field, newval) => ( {...obj, [field]: newval} )
const updatedObj= updateObj(obj, "firstname", "Athana")
console.log(updatedCopy)

// Delete a property of an object

// Immutable delete
const deleteIdFromObj = (obj, field) => {
  const {[field]: _ , ...objToReturn } = obj
  return objToReturn
}

const objFromDelete = deleteIdFromObj(obj, "id")
console.log(objFromDelete)