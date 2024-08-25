// Array.from() lets you create Arrays from:

// iterable objects (objects such as Map and Set); or, if the object is not iterable,
// array-like objects (objects with a length property and indexed elements).

// syntax 
// Array.from(arraylikeobject)
// Array.from(arraylikeobject, mapFn)
// Array.from(arraylikeobject, mapFn, thisArg)

// let obj = {
//     a:1, b:2
// } // cannot be converted into an array


// let s = new Set([1,2,3])
// console.log(Object.prototype.toString.call(s)) // tp get the typeof s

Array.myfrom = function (arrayLike) {
    let arr= []
    for (let ele of arrayLike){
       arr.push(ele)
    }
    return arr
}

console.log(Array.myfrom(new Set([1,2])))

console.log(Array.myfrom(new Map([[1,2], [3,4]])))

// console.log(Array.from(new Map( [[1,2], [3,4]] ) ) ) // inside array of a map each element should be a object type