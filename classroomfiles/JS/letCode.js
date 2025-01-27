//console.log(x) //Variables declared with let must be Declared before use
{let x=10
console.log("inside",x) 

}
let x =20
console.log("outside",x)
//Variables declared with let must be Declared before use
/*

Variables declared inside a { } block cannot be accessed from outside the block:

{
  let x = 2;
}
// x can NOT be used here


Global scope and blocked scope 
Global scope => you can use Declared in the {} outside of {} this also 
blocked scope  => you can not use variable declared in the {} - outside of this 

*/
//Variables declared with varinside a { } block can be accessed from outside the block:

{
  var Glonalscope = 2;
}
// x CAN be used here
console.log("var we can use outside of the block scope ",Glonalscope)