
// MAP SET
// number boolean string array object Map set-- inbuild data types


//map()
// set ()

let info={
    1:"Admin",
    2: "Superwiser",
    3:"customer",
    4:"manager"
}
console.log(info)


// with map function

let mapA= new Map(
    [
     [1,"Admin"],
    [2, "Superwiser"],
    [3, "customer"],
    [4, "manager"] 
    ]
)
console.log(mapA)

let mapB = new Map(
    [
        [1, "Admin"],
        [true, "customer"],
        [[11, 22, 33], "Manager"],
        [{a:2, b:2}, "supervisor"]
    ]
)
console.log(mapB)

// map with values

let mapC= new Map(
    [
        [1, "blue"],
        [2, "green"],
        [3, "pink"]
    ]
)
console.log(mapC)

// empty map
let mapD= new Map
console.log(mapD)

mapD.set(1, "puple")
mapD.set(1, "pink")
mapD.set(3, "black")
console.log(mapD)

// size

console.log(mapD.size)

let a1 = mapD.get(2)
console.log(a1)

// update 
mapD.set(1, "white")
console.log(mapD)



// map.clear()
// console.lig(mapD)

let mapE = new Map(
    [
        ["a", "red"],
        [2, "green"],
        [3, 'pink']
    ]
)

mapE.delete("a")

let q1= mapE.has("A")
console.log(q1)  // falae



console.log(mapE.keys())
console.log(mapE.values)
console.log(mapE.entries)








for(let key of mapC.keys()){
    console.log(key)
}
for(let val of mapC.values()){
    console.log(val)
}
for(let [k,v] of mapC.entries()){
    console.log(k,v)
}


mapC.forEach(function(v,k){
    console.log(v,k)
})