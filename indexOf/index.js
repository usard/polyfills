var arr = [5,3, ,7,2,9] // sparse array means array having indexes with empty values

Array.prototype.myindexOf = function (val) {
    var array = this;
    if (array.length <= 0 ) {
        return -1
    }
    for (var i = 0 ; i < array.length ; i++ ) {
        if (array[i] !== undefined && array[i] === val) {
            return i
        }
    }
    return -1
}

console.log(arr.myindexOf(7))
console.log(arr.indexOf(7))