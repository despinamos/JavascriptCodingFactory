const userObj = {
  id: 1,
  firstname: "Alex",
  lastname: "Hihi",
  occupation: "Teacher"
}

console.log(userObj)

function objectTransf(object, callback) {
  return object.map(callback)
}