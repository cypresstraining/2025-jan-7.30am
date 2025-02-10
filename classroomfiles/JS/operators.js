//arthematic operators-
let x=10
let y=5
console.log("addition",x+y)
console.log("subtraction",x-y)
console.log("multiplication",x*y)
console.log("divison",x/y)
console.log("reminder",x%y)
console.log("increment",x++)//x=x+1 =>11
console.log("decrement",y--)//y=y-1 =>4
console.log("addition",x+y) //11+4
console.log("subtraction",x-y)//11-4
console.log("multiplication",x*y)//11*4
console.log("divison",x/y)//11/4
console.log("reminder",x%y)//11%4
//assignment operators 
let a = 10;
a += 5;  // a becomes 15 a= a+5
console.log("a+=5 :",a)
a -= 3;  // a becomes 12a= a-3
console.log("a-=3 :",a)

a *= 2;  // a becomes 24
console.log("a*=2 :",a)

a /= 6;  // a becomes 4
console.log("a/=6 :",a)

a %= 3;  // a becomes 1
console.log("a%=3 :",a)
//x+=5 x=X+5
//X%=3 x=x%3
//x*=5 x=x*5

3. //comparision operators 

console.log("== compares only value means 5 and '5' both are same",5 == '5');  // true (loose equality)
console.log("=== compares both value and type that means 5 is not same as '5' :",5 === '5'); // false (strict equality)
console.log("!= not equal comparisiontrue  ",5 != '3');    // true
console.log("!= not equal comparision -false",5 != 5);    // false

console.log(5 > 3);     // true
console.log(5 <= 5);    // true
/*
Logical and only (&&) retrurn true for both conditons results true 
if any one conditon or both conditons false then return false 

Logical or (||)
True || True  => True 
True ||False  => True 
False|| True  => True 
False|| False => False 
*/
let first =true;
let last = false;
console.log("Logical and operator ",first && last); // false (both must be true)
console.log("Logical or :",first || last); // true (at least one must be true)
console.log(!first);     
console.log(!last);     
//condtional operator - terniory operator - 
// short form of if and else 
// we do have  conditon (comparision)
//? - differentiator between conditona and expression
//expression 1 - if comparision is return true this will execute 
//expression 2 - comparision is return false then expression 2 will execute 

let i = 8;
let result = i > 10 ? 'Greater' : 'Smaller';
console.log("8 is less than 10",result); // Smaller
 i = 18;
 result = i > 10 ? 'Greater' : 'Smaller';
 console.log("18 is greater than 10",result); // Greater

//bitwise operator - 
console.log(5 & 3);  // 1 (binary 101 & 011 = 001)
//101 => 1(2^2)+0*2^1+2^0*1 =>   4+0+1 => 5
//  1*2^1+ 1*2^0 => 3
console.log(5 | 3);  // 7 (binary 101 | 011 = 111)
console.log(~5);     // -6 (inverts the bits of 5)
//type operator - 
console.log(typeof 10);        // 'number'
console.log(typeof '10')//string
console.log(typeof "Hello");   // 'string'
console.log([1, 2, 3] instanceof Array); // true
console.log(typeof [1, 2, 3])
console.log(typeof true)
console.log(typeof o)
var N=null
console.log(typeof N)
//typeof print the datatype 
//Spread operators 
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
let spreadedArr=[...arr,6,7,8,9]
console.log(newArr); // [1, 2, 3, 4, 5]
console.log(spreadedArr)
//descructing assignment 
let [s, b] = [10, 20];
console.log(s); // 10
console.log(b); // 20

const person1 = {name:"John",age:30};
let { name, age } = person1;
console.log(name); // John
console.log(age);  // 30
console.log(person1.name)
console.log(person1.age)

