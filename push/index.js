// synatax
// Array.push(element1)
// Array.push(element1,...arr1, elementN)

Array.prototype.mypush = function(...args) {
    var arr = this
    let currentIndex = this.length-1
    for (var i = 0; i< args.length ; i++) {
        if (args[i] !== undefined ) {
            arr[currentIndex+1] = args[i]
            currentIndex = currentIndex+1
        }
    }
    return arr
}

let arr1 = [1,2]
let arr2 = [1,2]

// arr1.mypush(3/0)
// arr2.push(3/0)

// arr1.mypush()
// arr2.push()

arr1.mypush( 3/0, 4, 5/0,)
arr2.push(3/0,4,5/0)

console.log(arr1)
console.log(arr2);
