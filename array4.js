
let birthyear= [2000, 2001, 2002, 2003]
let age=[]  //[ 26, 25, 24, 23 ]
for (i=0; i< birthyear.length;i++){
//console.log(i)
//console.log(birthyear[i])
//console.log(2026- birthyear[i])
//age.push(2026- birthyear[i])
}
//console.log(age)

// map() is used to create a new array by transforming each element of an existing array

birthyear= [2005, 2006, 2007, 2008]
let a= birthyear.map(function(el, index, arr){
    return 2006 - el
})
    console.log(a)

    let number= [11, 22, 33]
    let a1= number.map(function(el){
        return el+10
    })
    console.log(a1)

  // filter() is used to select elements from an array based on a condition.
  //filter = select elements
    let transaction= [68, 45,65, 23, -56, 32, -98, -64]
    let deposite =transaction.filter(function(el, index, arr){
       return el > 0
    })
console.log(deposite)

let withdrawl = transaction.filter(function(el, index, arr){
    return el < 0
})
console.log(withdrawl)

//reduce is used to reduce an array to a single value.
// reduce = many → one value
//syntax of reduce
//array.reduce((accumulator, currentValue) => {
  //return updatedValue;
//}, initialValue);

// program 3
let numA = [11,22,33]
let total  = 0

for(let i = 0 ; i < numA.length ; i++){
    // console.log(i)
    // consoel.log(numA[i])
    total = total + numA[i]
    //       0    +   11  ----> 11
    //       11   +   22  ----> 33
    //       33   +   33  ----> 66
}
console.log(total)

// using reduce
let numB= [10, 20, 30]
let q1= numB.reduce(function(acc, el, index,arr){
    return acc+ el
},5)
console.log(q1)

 