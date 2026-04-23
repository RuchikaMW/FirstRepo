
//forEach method

let cities = ["pune","mumbai","banglore"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome "+cities[i])
}

cities.forEach(function(el, index, arr){
    console.log(el)
})


let numberA =[20, 23, 54, 13, 95]
let Z= numberA.filter(function(el, arr, index){
    return el>50
})
console.log(Z)
// find Index
let X = numberA.findIndex(function(el, index, arr){
    return el > 50
}) 
console.log(X)


let numeric = [20, 30, 40, 50]
let S = numeric.every(function(el, index, arr){
    return el > 10
})
console.log(S)

let K = numeric.some(function(el, index, arr){
    return el > 5
})
console.log(K)


// map(el,index,arr) --> arr
// filter(el,index,arr) --> arr
// reduce(acc,el,index,arr) --> acc vl
// forEach(el,index,arr) - void
// find(el,index,arr) - single value
// findIndex(el,index,arr) - number
// some(el,index,arr) - boolean
// every(el,index,arr) - boolean