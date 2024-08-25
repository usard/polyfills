var arr = [1,2]


Array.prototype.myevery = function (callbackFn) {
    var arr = this
    for (i = 0 ; i < arr.length ; i++ ) {
        if (!callbackFn(arr[i])) {
            return false
        }
    }
    return true
}

console.log(arr.myevery(x => x%2 == 0))