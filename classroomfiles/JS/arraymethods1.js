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

let numbers = [1, 2, 3, 4, 5]; // numbers we defined into an array 
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
let firstEven=numbers.find(num=>num%2===0)
console.log("find method result ",firstEven)//this will print the first occurance 
console.log("index of first odd number",numbers.findIndex(num=>num%3===1)) //index of find result 
let evenNumArray=numbers.filter(num=>num%2===0)//all match items will retrun 
console.log("filter method results",evenNumArray)
console.log("index of first occurance of even number:",numbers.findIndex(num=>num%2===0))
let oddNumArray=numbers.filter(num=>num%2===1) //list of odd numbers in new array
oddNumArray.push(22)
let someOddArray=oddNumArray.some(num =>num%2==0)//find any even number 
console.log(someOddArray)//there is no even number in someOddArray
let everyOddArray=oddNumArray.every(num=> num%2===1) //every number is odd number then only it is true 
console.log(everyOddArray) //true/false
console.log(oddNumArray)
console.log(oddNumArray.pop()) //22
everyOddArray=oddNumArray.every(num=> num%2===1)
console.log(oddNumArray)
console.log(everyOddArray) //true
console.log(evenNumArray)
console.log(evenNumArray.every(num =>num%2===0)) //true
console.log(evenNumArray.some(num =>num%2===1))//false
let mergedArray=evenNumArray.concat(oddNumArray)
mergedArray=oddNumArray.concat(evenNumArray)
console.log(mergedArray)

let slicedNumbers=numbers.slice(0,4)//index 0,1,2,3 => end index excluded
console.log(slicedNumbers)
slicedNumbes1=numbers.slice(4,9)//4,5,6,7,8
console.log("sliced numbers between 4,9 - 9 exlcuded :",slicedNumbes1)
slicedNumvers2=numbers.slice(4,35)
console.log(slicedNumvers2)
console.log(fruits)
console.log(fruits.findIndex(fruit =>fruit=="papaya"))
console.log(fruits.find(fruit =>fruit=="papaya"))
console.log("spliced furits",fruits.splice(3,0,"splicedFruit1","splicedFruit2",'SplicedFruit3'))
//fruits.splice(1, 2, "Grape");
console.log(fruits); //papaya - SplicedFruit
//sorting numbers :
numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b);
//5,3 => 5,3
//5,8 => 
console.log("low to high ",numbers); // [1, 2, 3, 5, 8]
numbers.sort((a, b) =>  b - a);
console.log("high to lower",numbers);
console.log(fruits)
console.log(fruits.reverse())
console.log(numbers)
numbers.push(12,13,24,28)
console.log(numbers)

console.log(numbers.reverse())

console.log(numbers.join("_:"))
const index = fruits.indexOf("papaya");
console.log(index); 
fruits.push("Banana")
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("grape")); // false
const nested = [1, [2, 3]];
const flattened = nested.flat(2);
console.log(flattened); // [1, 2, 3, 4, 5]

numbers=[1,2,3,4,5]
const result = numbers.flatMap(num => [num, num + 2]);
console.log(result)

numbers = [1, 2, 3, 4];
const result1 = numbers.reduceRight((acc, num) => acc * num, 0);
console.log(result1)

numbers = [1, 2, 3, 4];
numbers.fill(0, 1, 3);
console.log(numbers); // [1, 0, 0, 4]

let colors = ["red", "blue", "green", "yellow", "purple"];
colors.copyWithin(1, 3);  //"yellow", "purple"
//["red", "yellow", "purple" "yellow", "purple"]
console.log(colors);
 numbers = [10, 20, 30, 40, 50];
numbers.copyWithin(2, 1, 3); //20, 30
console.log(numbers);




