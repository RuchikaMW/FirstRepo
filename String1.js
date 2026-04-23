

// typeof
let firstname= 'Ruchika'
console.log(typeof firstname)

let lastname= "kukde"
console.log(typeof lastname)

let middlenam= `Ramesh`
console.log(typeof middlenam)

// does string stores the value by index ?
let city3 = "nagpur"
console.log(city3)
// 0    1    2   3    4
// N    a    g    p  r
console.log(city3[0])
city3[0] = "c"
console.log(city3)


// string 
let fn = "Ruchika"
let ln = "Kukde"
// my firstname is "chinmay" and my lastname is deshpande
console.log("my firstName is "+fn+ "and my lastname is "+ln)
// string interpolation
console.log(`my firstName is ${fn} and my lastName is ${ln}`)
// string interpolation solves expression but output is always string
console.log(`${2+2}`) // 4 , '4'


// number + number  ---->  number
// numbers + string ---->  string
// string  + number ---->  string 
// string  + string ---->  string

let a= 10
let b= 20
let c= "Ruchika"
console.log(a+b+c)
console.log(c+b+a)

// string + number + number
    //"hello" + 20 + 10
        //"hello20"+10
         // "hello2010"




let city4 = "nagpur"

// 0    1    2   3    4   5
// n    a    g   p    u    r
console.log(city4.length)
// index always start from 0


console.log(city4.length-1)
//city4.length - 1 is always last index


let city5 = "mumbai"
console.log(city5.length)
console.log(city5[0])
console.log(city5[5])