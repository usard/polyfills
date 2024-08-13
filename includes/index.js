let arr = [1,2,3,4,5,6]
// arr.includes()
// arr.includes(3)  // true

let obj = {id:1}
// arr.push(obj)
Array.prototype.myincludes = function(targetElement, fromIndex=0){
    if (this.length == 0 ) {
        return false
    }

    let newIndex=0;
    if (fromIndex < 0) {
        newIndex = this.length + fromIndex
    }

    for ( let i = newIndex ;i<this.length; i++) {
        if (this[i] === targetElement) {
            return true
        }
    }
    return false
}

console.log(arr.myincludes(3,-4));

