console.log('this :', this)

let name = {
    firstname: 'anvesh',
    lastname : 'reddy'
}

function printname(hometown, state) {
    console.log(this.firstname+ ' '+ this.lastname+' '+ hometown+' '+state)
}

// printname.call(name) // using call method

// printname.apply(name)  
 
// let bindreturnprintname = printname.bind(name)
// bindreturnprintname()

Function.prototype.mybind = function(...args){
    let method = this
    console.log(method);
    const args2 = args.slice(1) // will return array starting from index 1
    return function () {
        method.call(args[0], ...args2)
    }
}
let mybindreturnprintname = printname.mybind(name,'hyderabad', 'telangana')
mybindreturnprintname()