
let names=["Ruchika", "Neha", "Rutwik", "Anveer"]
let a1=names.pop()
console.log(names)
let a2=names.push("Amar")
console.log(names)
let a3=names.shift()
console.log(names)
let a4=names.unshift("Mohit")
console.log(names)
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)



let nam=["Ram", "Shyam", "Mira"]
let q1=nam.includes("Ram")
console.log(q1) // o/p true
let q2=nam.includes("Ruchika")
console.log(q2)// o/p false


names=["Ruchika", "Ram","Bharat", "Rime"]
let a11 =names.indexOf("Ruchika")
console.log(a11)//o/p is 0
let a12 = names.indexOf("Bharat")
console.log(a12) //o/p is 2

let a13=names.at(3)
console.log(a13) //o/p is Rime

let birthyear= [2000, 2001, 2003, 2004]
let age=[]
for (i=0; i< birthyear.length; i++){
    //console.log(i)
    //console.log(birthyear[i])

    let s=2026-birthyear[i]
    age.push(s)

}
console.log(age)



let marks=[90, 91,89,99, 85]
let above90=[]
for(i=0; i< marks.length; i++){
    console.log(marks[i])
    if(marks[i]>= 90){
        above90.push(marks[i])
    }
}
console.log(above90)