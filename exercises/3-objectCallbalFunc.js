const userObj = {
  id: 1,
  firstname: "Alex",
  lastname: "Hihi",
  occupation: "Teacher"
}

console.log(userObj)

function objectTransf(object, callback) {
  
}

const double = objectTransf(userObj, Object.keys())

console.log(double)