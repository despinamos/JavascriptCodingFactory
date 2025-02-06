const users = [
  {id: 1, firstname: "Alice", email: "3aueb", isActive: true},
  {id: 2, firstname: "Bob", email: "4aueb", isActive: false},
  {id: 3, firstname: "Costas", email: "5aueb", isActive: true}
]

users.forEach(u => console.log(u))

const emails = users.map(user => user.email)
console.log(emails)

const activeUsers = users.filter(user => user.isActive)
console.log(activeUsers)

const cart = [
  {title: "laptop", price: 1000},
  {title: "mouse", price: 50}, 
  {title: "keyboard", price: 80}
]

const totalSum = cart.reduce((acc, item) => acc + item.price, 0)
console.log(totalSum)

const user = users.find(user => user.email === "5aueb")
const userIndex = users.findIndex(user => user.email === "5aueb")
console.log(user, userIndex)

const isOutOfStock = cart.some(item => item.stock === 0)
const isAllOfStock = cart.every(item => item.stock === 0)
console.log(isOutOfStock) // true
console.log(isAllOfStock) // false

const posts = [
  { title: "post1", tags: ["js", "web"] },
  { title: "post1", tags: ["nodejs", "backend"]},
  { title: "post1", tags: ["react", "frontend"]}
]

const allTags = posts.flatMap(post => post.tags)
console.log(allTags)

const fruits = ["Apples", "Oranges"]
for (const [i, fruit] of fruits.entries()) {
  console.log(`Index: ${i}, Friut: ${fruit}`)
}