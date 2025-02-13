const userObj = {
  id: 1,
  firstname: "Alex",
  lastname: "Hihi",
  occupation: "Teacher"
}

const keysArr = ["id", "lastname", "occupation"]

function keysFunc(object, keys) {
  const objectKeys = Object.keys(object)

 // objectKeys.forEach(key => (if keys.includes(key)), )
  
}

console.log(keysFunc(userObj, keysArr))