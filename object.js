
// objects
// js everything is object

let info= ["ruchika", "kukde", 127468, 30, 87]
console.log(info)

let info2={

    // key= value
    // prop= value

    firstname: "Ruchika",
    lastname: "kukde",
    age : 30,
    roll_no: 777,
    mob_no: 9745637545

}
console.log(info2)


//DEFINE

let cities= ['Pune', 'mumbai', 'Bamglor', 'Delhi']
console.log(cities[0])

//update

cities[0]= 'Nagpur'
console.log(cities)

//add 
cities.push('Wardha') // // [ 'Nagpur', 'mumbai', 'Bamglor', 'Delhi', 'Wardha' ]
cities.unshift('Goa') // [ 'Goa', 'Nagpur', 'mumbai', 'Bamglor', 'Delhi', 'Wardha' ]
console.log(cities) 

// Delete
cities.pop() // [ 'Goa', 'Nagpur', 'mumbai', 'Bamglor', 'Delhi' ]
cities.shift() // [ 'Nagpur', 'mumbai', 'Bamglor', 'Delhi' ]
console.log(cities) 

// // does object stores the value by index ? - No

let vehicle = {
    color : 'Pink', 
    model: 'Sedan'
}
// console.log(vehicle[0]) // 

// retrive --- dot notation and bracket notation
console.log(vehicle.color) // dot notation
console.log(vehicle['model']) // bracket notation

// update ---  dot notation and bracket notation

vehicle['color']= 'Red'
vehicle.model= 'SUV'
console.log(vehicle)

// // add    ---  dot notation and bracket notation 
vehicle.logo= 'circlr'
vehicle['company']= 'Audi'
console.log(vehicle)

// delete -- dot notation and bracket notation
// {
//     color:"blue",
//     model:"sedane"
// }
// { color: 'red', model: 'SUV', logo: 'circle', company: 'audi' }
delete vehicle.color
delete vehicle['model']

console.log(vehicle)


// 

let info3 ={

    firstname : 'Ruchika',
    MiddleName : 'Ramesh',
    age : '30',
    rollno : '7'

}
console.log(info3.firstname)
console.log(info3['MiddleName'])

// update

info3.age=31
info3['MiddleName'] = 'mohit'
 //add
 info3.language= 'marathi'
 info3.city= 'Nagpur'

 console.log(info3)

 // delete
 delete info3.city
 delete info3.age
 console.log(info3)

 let info4 = {
    firstName:"Prachi",
    lastName:"deshpande",
    age:34,
    rollNo:34,
    age:55
}
console.log(info4)
