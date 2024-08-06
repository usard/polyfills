let name = {
    firstname: 'anvesh',
    lastname: 'reddy'
}

function printname(hometown, state) {
    console.log(this.firstname+' '+this.lastname+ ' '+ hometown+' '+state);
}


// printname.call(name)


// Function.prototype.mycall = (...args) =>{
// let method = this
// console.log(method)
// let obj = {
//     ...args[0],
//     method: method.printname
// }
// return obj.method()

// }

Function.prototype.mycall = function(...args){
    let method = this
    // console.log(method);
    const args2 = args.slice(1) // will return array starting from index 1
    let obj = {
        ...args[0],
        method
    }

    return obj.method(...args2)
}
printname.mycall(name, 'hyderabad', 'telangana')