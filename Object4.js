
let info5={
    fn: 'Ruchika',
    ln: 'kukde'
}
Object.freeze(info5)

let car = {
    type:"car"
}
Object.seal(car)
car.model = "A4"
delete car.type
car.type ="car r"
console.log(car)


let car2={
    type:'car',
    model:'Q4'
}
let q2= Object.hasOwn(car2, "Type")
console.log(q2)

// document.querySelector("#product > thead > tr > th:nth-child(3)")