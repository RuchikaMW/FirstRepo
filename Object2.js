
let info= {
    firstname : 'RUCHIKA',
    LASTNAME : "kUKDE",
    greet:function()
    {
            console.log('hello')

    }
}                             // // object ? ---> properties and methods
  // A greet function in JavaScript is a simple function used to display or return a greeting message.

console.log(info.firstname)
info.greet()


// program2

let info2 ={
    fn : 'Ruchika',
    ln : 'Kukde',
    Parent: {
        mother: 'Kalpna',
        sibling: 'Rutwik'
    },
    skill : ['html', 'css', 'javascript']

}
info2.skill.push('Ai')
console.log(info2.Parent.sibling)
console.log(info2['Parent']['mother'])

info2.Parent.mother='kalpna R'
console.log(info2)

info2.Parent.sibling2= 'neha'
console.log(info2)

// program 3

// object property or key is always string

let info3= {
    fn : 'Ruchika',
    ln : 'Kukde',
    age: 25
}
console.log(Object.keys(info3))
console.log(Object.values(info3))
console.log(Object.entries(info3))