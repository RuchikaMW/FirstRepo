
let numbers= [100,200,300,400]
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[3])

let names=["Ruchika","Rutwik","Mohit","Titu"]
console.log(names[0])
let a= names.length
console.log(a)
// length - 1 is always last index - True

console.log(names[names.length-1])
console.log(names[names.length-2])

let info=["ruchika","wankhede",30,true]
console.log(info)

let fruits =["Orange","Pinnaple","Grapes","Mango"]
console.log(fruits)
fruits[1]="Banana"  //this is update
console.log(fruits[1])
console.log(fruits)

console.log(fruits[1])
for(let i=0;i< fruits.length;i++){
    console.log(fruits[i])
   // console.log(i)
}
    
let cities=["nagpur","Pune","Mumbai","Delhi"]
for(i=0; i< cities.length; i++){
    console.log(cities[i])
}