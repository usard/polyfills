// some method checks whether atleast one element in the array passes the function condition

// syntax
// arr.some(callbackFn)
// arr.some(callbackFn, thisArg)


let arr = [1,2,3,4,5]

let obj ={}

Array.prototype.mysome = function (callbackFn) {
    if(typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' is not a function');
    }
    if (Object.prototype.toString.call(this) !== '[object Array]') {
        throw new TypeError('method is called on non array type')
    }
    let arr = this
    for (var i =0 ; i< arr.length; i++) {
        if ( callbackFn(arr[i]) ) {
            return true
        }
    }
    return false
}

console.log(arr.mysome(x => x%2 == 0))
// console.log(arr.some(x=> x%2 ==0 ))
