//Array is a reference data type 
// you can save multiple values with this data type 

let fruits = ["apple","banana","grapes"] // 3 elements 
console.log(fruits)
console.log(fruits[0])//array index start with zero 
console.log(fruits[1])
console.log(fruits[2]) //lenth of array  = max index+1 
console.log(fruits.length)
fruits.push("papaya") //1 element we are adding 
console.log("after adding papaya with push",fruits)
console.log("after papaya - lenth-",fruits.length)
fruits.push("papaya")
console.log(fruits.lastIndexOf())//return -1 if you have not supplied any item 
 //addign the new element into the ar ray at the last index and retruns incremented length 
fruits.push("strawberry","papaya","pineapple","pomo") //3 elements 
console.log("after adding 3 more fruits through push",fruits)
 //1 element we are adding 
console.log(fruits.length)
console.log(fruits) //8 fruits - 2 papayas
console.log(fruits.lastIndexOf("papaya"))//last occurance of the array element 
console.log(fruits.push("fruit","custard")) //length of an array as a result 
console.log("before-pop",fruits)
console.log(fruits.pop())//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log("after pop-1",fruits)
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.pop())
//push and pop used to add and delete the array element at last index 
//shift/unshift

let unshiftLength=fruits.unshift("firstFruit")//length of array 
console.log(unshiftLength) //
console.log(fruits)
console.log(fruits.shift()) //first element removed 
console.log(fruits)
//push and pop works at last index of array to add and remove elements 
//unshift and shift works a t first indext of array to add and remove 
//push and unshift add the element to the array and return the updated length of array 
//pop and shift return the removed element 

//map()  => which is used to apply a function to all the element in the array 

const numbers = [1, 2, 3, 4, 5]; // numbers we defined into an array 
//square of the number is nothing but multiply the same number with the given number 
//2*2 
//3*3 
//4*4 
/* this below function will be applied for all the elements with in the array if you use map()
function squares(num){
return num=num*num 
}
*/
console.log(numbers)
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9,16,25]
const cubes=numbers.map((x)=>x*x*x)
console.log(cubes)
const newarray=squares.map(x=>x+x)
console.log(newarray)
const print=squares.map(x=>x+" :I am in array")
console.log(print)
//filter() is used to filter the results in the array based on the given conditon 
//const numbers = [1, 2, 3, 4, 5];
numbers.push(6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)
console.log(numbers)
const evenNumbers = numbers.filter(num => num % 2 === 0);
const odd=numbers.filter(x=> x%2==1)
console.log(evenNumbers); // [2, 4,6,8,10,12,14,16,18,20]	
console.log(odd)

const sum = numbers.reduce((total, num) => total + num, 0);
//for every value we can add total 
//total is zero in above 
console.log(sum); // 1+2+3...+20
const multiplication=numbers.reduce((total,x)=>total*x,1)
console.log(multiplication)
const reduceFruits=fruits.reduce((total,x)=>total+x,"")
console.log(reduceFruits)

fruits.forEach(fruit => console.log(fruit));
numbers.forEach(num => console.log(num));
squares.forEach(square => console.log(square));
cubes.forEach(cube=>console.log(cube))