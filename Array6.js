

// slice method
//names.slice(startIndex,endIndex(notincluded))
//             0      1      2       3       4
let names= ["siya", "Piya", "Ram", "Alle", "Sam"]
//              -5        -4        -3      -2       -1
let one1= names.slice(3)
console.log(one1)
console.log(names.slice(1,3))
console.log (names.slice(3, -1))
console.log(names.slice(1,4))
console.log(names.slice(-3))
console.log(names.slice(-5,4))
console.log(names.slice(1,-1))
console.log(names.slice(-1,-5))

// splice
//fruits.splice(startIndex,numberOfElement)

//              0        1        2       3        4
let fruits = ["apple","mango","grapes","banana","papaya"]

fruits.splice(1,1)
console.log(fruits)
fruits.splice(1,1,"chikoo")
console.log(fruits)

// join 
let info = ["kirtijoshi","gmail.com"]
let q11  =info.join("@")
 console.log(q11)
//let q11  =info.join("-")
//console.log(q11)


// reverse
let vegetables = ["brinjal","tomato","ladyfinger","cabbage"]
let q12 = vegetables.reverse()
console.log(q12)

// SORT
vegetables = ["brinjal","tomato","ladyfinger","cabbage"]
vegetables.sort()
console.log(vegetables)

// concat()

let a = [11,22,33]
let b = [44,55,66,78, 98]
console.log(a.concat(b))