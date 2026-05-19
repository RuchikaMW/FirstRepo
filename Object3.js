
// methods - keys()

 let info1= {
    firstname: 'Ruchika',
    lastname: 'kukde',
    age: '35'

}
let q1= Object.keys(info1)
console.log(q1)

let info2 = {
   firstname: 'Ruchika',
    lastname: 'kukde',
    age: '35'
}
let q2= Object.values(info2)
console.log(q2)

let info3 = {
   firstname: 'Ruchika',
    lastname: 'kukde',
    age: '35'
}
let q3= Object.entries(info2)
console.log(q3)

let obj1= {a:1}
let obj2= {a:2}
let obj3=Object.assign({},obj1, obj2)

console.log(obj3)



const info4={
    a:1,
    b:2
}
info4.a=3
info4.b=5

 // delete info4.a
// info4 = {
//c:4
 //} 
console.log(info4) 


 // Object.freeze()
// Locks the object (cannot update / add / delete object)

let info5={
    fn: 'Ruchika',
    ln: 'kukde'
}
Object.freeze(info5)