const arr = [10,20,30,40];

// console.log(arr.map(item=> item*2)) // (4) [20, 40, 60, 80]

Array.prototype.mymap = function(...args) {
    let callback = args[0]
    console.log('this :', this)
    let arr1 = []
    for (i =0; i< this.length; i++) {
      arr1.push(callback( this[i], i))
    }

    return arr1
}

console.log(arr.mymap((item, index)=> item*2))
