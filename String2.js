
let fn= "Ruchika"
console.log(fn)
console.log(typeof fn); // string

// length

let city= `Nagpur`
let q1= city.length
console.log(q1) // 6

let city1= 'Nagpur'
let q2= city1.toUpperCase()
console.log(q2)  // NAGPUR

let city3 = 'MUMBAI'
let q3 = city3.toLowerCase()
console.log(q3) //mumbai

// Method chaining

q4 ="Ruchika".toLowerCase().toUpperCase().length
console.log(q4)

let city4 = 'Delhi'
let q5 = city4.includes("hi")
console.log(q5) // it return true or false ans is true

let q6 = city4.includes("W")
console.log(q6) //false

let city5 = "PUNE"
let q7 = city5.indexOf("P")
console.log(q7) // 0

let city6 = "chinmayaya"

// 0   1   2   3   4   5   6  7  8  9
// c   h   i   n   m   a   y  a  y  a

let q8 = city6.indexOf("a", 6)
console.log(q8) // 7

let q9= city6.lastIndexOf("a")
console.log(q9)  // 9