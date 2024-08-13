let arr = [1,5,3,4]

arr.findIndex((num)=> num%2 == 0)

Array.prototype.myfindIndex = function(callbackFn){
    console.log(this)
    if (this.length == 0) return i;
    for(let i =0; i< this.length; i++) {
        if (callbackFn(this[i])) return i
    };
    return -1;
}


console.log(arr.myfindIndex((num)=> num%2 == 0));
