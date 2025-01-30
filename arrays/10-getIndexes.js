const arr = [1, 2, 3, 4, 2, 6, 7, 9, 9, 2]

// function that returns an array of indexes
// where a certain number exists in an array

let indexesArr = []

function getIndexes(array, number) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === number) {
      indexesArr.push(i)
    }
  }
  console.log(indexesArr)
}

function getIndexes2(arr, val) {
  const indexes = []

  arr.forEach((v, index) => {
    if(v === val) {
      indexes.push(index)
    }
  })
  return indexes
}

getIndexes(arr, 2)
console.log(getIndexes2(arr, 2))