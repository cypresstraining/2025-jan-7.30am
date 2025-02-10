//two types of data types we do have in Js
//1. Primitive data types - store single value 
//2. Reference data types - store multiple value 

//example for primitive data types  - storing single value 

let x=10; //number 
let y=10.25 // number 
let name="Ram Prasad" //string - "" /''
let z="10.2" //string 
let isMale=false //Boolean 
let u; //undefined 
console.log(x)// you can print single value 
console.log(y)
console.log(name)
console.log(u)
console.log(z)
console.log(isMale)
//Examples for reference data types 
//storing multiple value 
const fruits =//array 
["Apple","Banana","Grapes","Papaya","Strawberry"]
console.log(fruits)// this will print entire array 
//array store the values with reference index - position number 
// in the array the position number starts from 0 - not from 1
//length property to calculate the length of the your array 
//Array.length
console.log("array length is :",fruits.length) //5
//Gets or sets the length of the array. This is a number one higher than the highest index in the array.
console.log("first element in the array :-",fruits[0]) //Apple
console.log("second element -",fruits[1])//Banana
console.log(fruits[2])//Grapes
console.log(fruits[3])//Papaya
console.log(fruits[4])//strawberry
//eq() avaialble in cypress
//console.log(fruits[5])//undefied 

console.log(fruits[5])//undefied 
const cars={ //object
    "name":"toyota",
    "Model":"1234",
    "abc":"1234",
    "price":1000
}
console.log(cars)// print entire object 
const person ={ //object
    name:"ram",
    age:35,
    Address:"my address",
    Qualifiation:"Btech",
    Tools:["cypress","playwright","selenium"]
}
console.log(person) //entire array you can print 
console.log("name of the person:",person.name)
console.log("age of the person:",person.age)
console.log("model nof the car :",cars.Model)
//but the problem is how do you retrieve single property of the object , single value from the list of array 

//Function - 
function add(x,y){
 
    sum=x+y
    return sum
}
x=>x+y //
console.log("sum of two values from the function add",add(10,5))//15