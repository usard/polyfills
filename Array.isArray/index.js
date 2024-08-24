// console.log('i am in is array')

const a = {id : 1, name: 'anvesh'}


const arr = [1,2,3]
console.log(Array.myIsArray(arr))

Array.myIsArray = function(arr){
    return Object.prototype.toString.call(arr) == '[object Array]'
}
