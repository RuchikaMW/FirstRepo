
let info=["Ruchika", "Wankhede", 11, 99, "ABS"]
console.log(info)

let numA= [10, 20, 30, 40]
console.log(numA)
numA[1]=500
console.log(numA)


let namB=["Ruchika", "Wankhede", "Siya","Mani"]
for(i=0; i< namB.length; i++){
    console.log(namB[i])
}
console.log(namB[namB.length -1]) //mani o/p
//console.log("length - 1 is lastIndex")


let namc=["Ruchika", "RAM","laxman", "shyam"]
let i1 = namc.length-1
while(i1 >=0)
    {
    console.log(namc[i1])  //print reverse
    i1--
}

 let i2 = 0
 while(i2 < namc.length){
     console.log(namc[i1])
     i2++
 }

//PUSH method ADD ELEMENT AT END

let animal=["Tiger", "Deer", "Cow","Bull"]
let a1=animal.push("Sambar")
console.log(a1) //o/p 5
console.log(animal) //o/p [ 'Tiger', 'Deer', 'Cow', 'Bull', 'Sambar' ] 

//UNSHIFT methd Add one more element at the beggining of the array
//it return new length of array
let a2=animal.unshift("Cat")
console.log(a2) //o/p is 6
console.log(animal) //o/p is [ 'Cat', 'Tiger', 'Deer', 'Cow', 'Bull', 'Sambar' ]

//POP method REMOVE ELEMENT AT END
let name1=["Gita", "Sita", "Mira"]
let a3 = name1.pop()
console.log(name1) //o/p is [ 'Gita', 'Sita' ]
console.log(a3) // mira

//SHIFT Remove first element of array
//it return remove element
let fruitA=["Banana", "Apple", "Grapes"]
let a4=fruitA.shift()
console.log(fruitA) //o/p is [apple, grapes]
console.log(a4) // banana


let numB=[1, 2, 3, 4]
numB.shift()
console.log(numB) //o/p is [ 2, 3, 4 ]

numB.unshift(90)
console.log(numB) //o/p is[ 90, 2, 3, 4 ]


// push("value")  --> new Length
// unshift("value") --> new Length
// pop() - returns same element
// shift() - returns same element