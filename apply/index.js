let name = {
    firstname: 'anvesh',
    lastname: 'reddy'
}

function printname (hometown='', state='') {
    console.log(this.firstname+ ' '+ this.lastname+ ' '+ hometown+ ' '+ state)
}


// printname.apply(name) // calling printname method on name object


// printname.apply(name, ['hyderabad', 'telangana']) // calling printname method on name object with extra arguments for printname

Function.prototype.myapply = function(...args) {
    let method = this
    let obj = {
        ...args[0],
        method
    }
    let args2 = args[1]
    return obj.method(...args2)

}

printname.myapply(name, ['hyderabad', 'telangana'])