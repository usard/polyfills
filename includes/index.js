let arr = [1,2,3,4,5,6]
arr.includes()
arr.includes(3)  // true

let obj = {id:1}
arr.push(obj)
Array.prototype.myincludes = function(targetElement){
    // console.log('this :', targetElement )
    for (let i=0;i<this.length; i++) {
        if (this[i] == targetElement) {
            return true
        }
    }
    return false
}

console.log(arr.myincludes());

