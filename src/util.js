
//named exports 
const add = (a,b) => a+b
const name = 'alfie'

//default exports 
const square = (x) => x**x
export { add, name, square as default}

console.log("heuyu")
