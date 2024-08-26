// syntax 
// pop will remove the element from the last index and returns the last element which is removed
// it will mutate the array

Array.prototype.mypop = function () {
    if (this.length ==0 ) {
        return 
    }
    let arr = this;
    var popelement = arr[arr.length - 1]
    arr.length = arr.length - 1
    return popelement
}

let arr1 = [
    1,2,3
]
let arr2 = [
    1,2,3
]

console.log(arr1.pop(), arr1)

console.log(arr2.pop(), arr2)