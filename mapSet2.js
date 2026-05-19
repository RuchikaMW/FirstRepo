
// set --> 
// number ---> boolean ---> string ----> object ---> array ---> map ---> set
// it does not allow to store duplicate values 


// Create , Retrive , Update , Delete ,Has ??
// Duplicate , Index ?


let q= [10, 20, 30, 40, 50]
console.log(q)  // stores the value by index ? YES

let obj  = {

    fn:"chinmay",
    ln:"deshpande",
    age:23,
    fn:"sarika"

}
console.log(obj) //  // stores the value by index ? NO



let k = "Instamart"
console.log(k[2])  // stores the value by index ? yes 


// MAP 

let mapA= new Map([

    [1, "Apple"],
    [1, "grapes"],
    [1, "Avacado"]
])

console.log(mapA) // Avacado do not store duplicate element


let setA = new Set([11,22,33,44,55])
console.log(setA)

// SET allows duplicate values --- No

let setP= new Set([10, 20, 30, 30, 40, 40])
console.log(setP)


// does set stores the value by index? - No
 let setB= new Set([100, 200, 300, 400])
 console.log(setB)
 console.log(setB[2]) // undefined


 let setD= new Set
 console.log(setD)

 setD.add(90)
 setD.add(50)
 setD.add(60)
 setD.add(90)
 setD.add(100)
 console.log(setD) // Set(4) { 90, 50, 60, 100 }
 console.log(setD.size)  // 4


 setD.forEach(function(val){
    console.log(val)
 }
 ) // 90 50 60 100



let setE= new Set()
setE.add(200)
setE.add(300)

console.log(setE)


let a1= setE.has(3)
console.log(a1) // false

console.log(setE)

setE.delete(1)
console.log(setE)


setE.add(11)
setE.add(44)
setE.add(34)
console.log(setE)


//setE.clear()
console.log(setE)

console.log(setE.keys())  //[Set Iterator] { 200, 300, 11, 44, 34 }


// reserved methods

for(keyone of setE.keys()){
    console.log(keyone)
} //200
//300
//11
//44
//34


for(val of setE.values()){
    console.log(val)
} // 200
//300
//11
//44
//34


for([k, v] of setE.entries()){
    console.log([k,v])
}

//[ 200, 200 ]
//[ 300, 300 ]
//[ 11, 11 ]
//[ 44, 44 ]
//[ 34, 34 ]