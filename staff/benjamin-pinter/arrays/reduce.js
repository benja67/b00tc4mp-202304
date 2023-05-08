function reduce(array, callbackFn, initialValue) {
    var a
    for (var i = 0; i < array.length ; i++) {
        a = callbackFn(array[i])
    }
    return a
}
//Tests

//Case1

const array1 = [1, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = reduce(array1, 
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue)

console.log(sumWithInitial)
// Expected output: 10
