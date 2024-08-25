var arr = [5,3, ,7,2,9] // sparse array means array having indexes with empty values

Array.prototype.myindexOf = function (val, fromIndex=0) {
    var array = this;
    var index = fromIndex
    if (index < 0){
        if (Math.abs(index) > array.length) {
            index = Math.abs(index)%array.length
        }
        else {
            index = array.length+index
        }
    } 
    if (array.length <= 0 || index >= array.length) {
        return -1
    }
    for (var i = index ; i < array.length ; i++ ) {
        if (array[i] !== undefined && array[i] === val) {
            return i
        }
    }
    return -1
}

console.log(arr.myindexOf(7,-4))
console.log(arr.indexOf(7, -4))


//note :
// can search even with negative index greater than negative of array length 
// cannot search for a index greater than or equal to array length
//will return -1 if u want to search for undefined in sparse array