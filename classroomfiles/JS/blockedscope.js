/*console.log(globalScope)//hositing - before you delcare printing the statement
var globalScope=100
console.log("In global scope :",globalScope) //100
{
console.log("blocked scope",globalScope) //100
var globalScope=200
console.log("Blocked scope after re assignment with in the block",globalScope)//200
}

console.log("global scope after re asisgnment",globalScope)//200
*/
//console.log(globalScope)//hositing - before you delcare printing the statement
//let globalScope=100
//console.log("In global scope :",globalScope) //100
{
  //  console.log("blocked scope",globalScope) //100
    //ReferenceError: Cannot access 'globalScope' before initialization  
let globalScope=200
console.log("Blocked scope after re assignment with in the block",globalScope)//200
}
let globalScope=1000
console.log("global scope after re asisgnment",globalScope)
//100 - blocked scope variable can not use out side of the block

//const pi=3.14
console.log("out side of block",pi) //ReferenceError: Cannot access 'pi' before initialization
{
const pi=4.14 //const not eligible for re declare with in the blocked scope 
console.log("inside of block",pi)
}
const pi=3.14
console.log("outside of block",pi) //ReferenceError: pi is not defined
