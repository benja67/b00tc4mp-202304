function map(array, callbackFn) {
    var fr = []
    for (var i = 0; i < array.length ; i++)
       fr[i] = callbackFn(array[i])
    
    return fr
}
//Tests

//Case1

const array1 = [1, 4, 9, 16]

// Pass a function to map
const map1 = map(array1, x => x * 2)

console.log(map1)
// Expected output: Array [2, 8, 18, 32]