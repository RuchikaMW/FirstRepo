
// charAt

// 0  1 2  3  4
// h  e l  l  o

a1= "hello"
console.log(a1.charAt(2)) // l

// 0  1   2  3  4
// h  e   l  l  o
//-5 -4  -3 -2 -1
// at
let a2= "hello"
console.log(a2.at(-1))  // o

// startwith
let a3= "Nagpur"
console.log(a3.startsWith("N"))  // true
console.log(a3.startsWith("Nag")) // true

// endswith

let a4= "Hydrabad"
console.log(a4.endsWith("N")) // false
console.log(a4.endsWith("ad"))  // true

// trim() // remov space

let a5 = " banglor "
console.log(a5.length) // 9 including space
let q6 = a5.trimStart()
console.log(q6.length) // 8
console.log(q6) // banglor

city7 = " goa "
console.log(city7.trimEnd()) //  goa
console.log(city7.length)// 5

// replace

let info= "am learning js and js is easy to learn"
let a6= info.replace("js", "JAVA")
console.log(a6) // am learning JAVA and js is easy to learn

// replace ALL
let a7 = info.replaceAll("js", "java")
console.log(a7)  // am learning java and java is easy to learn