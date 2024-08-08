const arr = [10,20,35, 40, 45];

// console.log(arr.filter(item => item%2 == 0)) //  [10, 20, 40]

Array.prototype.myfilter = function(callback) {
    let arr1 = [];
    for(i=0; i< this.length; i++) {
        if (callback(this[i])) {
            arr1.push(this[i])
        }
    }
    return arr1;
}

console.log(arr.myfilter(item=> item%2 == 0))
