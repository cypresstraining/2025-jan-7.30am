//"use strict" //expose all silent error - reference errors 

//use strict is used to identify the silen error in the javascript code
//reference errors - 
//unassigning the variable 
// you can define the for loop to run the loop for your defined number of times 

for (
  let i = 10; //initilizing the variable 
  i <= 15; //condtion to stop iterations
  i++ //increment for every iteration 
) {
    console.log("*"); //block code executes when i=1 to 5 
  //iteration 1 => i=1  and then 
  //i=2
  //i=3
//i=4
//i=5

   }
     //i= i+1 => 6
  
  //for -in  is used to play with object in JS 

  // if you declare an object then to iterate through all keys exist in the object 
  //for -in 
  const person = {
     name: "John", 
     age: 30,
      city: "New York",
      Qualification:"Btech",
      Score:"Pass" ,
      Grade:"A"
                   };


                   //for(declare Variable in  ObjectName){}
                   // this loop will run for all keys present in the object 
                   //+ is used to concatinate to string 
                   // "cypress"+"playwright" => "cypressPlaywirght"
  for (let key in person) {
    console.log(key + "     " + person[key]);
  }

  //3. for of array -  for(declare variable of arrayName)
  //for object => we use for in 
  //for arrays => we use for of 
  const fruits = ["Apple", "Banana", "Mango","papaya","canberry","mylast"];
  console.log(fruits)
  console.log(fruits[0])
  console.log(fruits.length) //6
  for(let x=0; x<fruits.length; x++){//regular for 
    console.log("I am from regualr for ",fruits[x])

  }
  
  //(property) Array<string>.length: number
//Gets or sets the length of the array. This is a number one higher than the highest index in the array.
for (let fruit of fruits) {//for of - used for array and string
  
  console.log("I am from for of :",fruit);
}

// objects we use for-in 
//array or string  => for-of
let word = "Hello";
console.log(word.charAt(0))
for (let letter of word) {//for of : used to run the loop through alll charas of the string 

  console.log("letters of string ",letter);
}
for(let j=0; j<word.length; j++){//regular for => shortcut for of for strings
  console.log(word[j])
}

//how to reverse the string using for loop 
//ram => mar
//function funcitonNAme(arguments){ 
//  return }

function reverseString(str) {
    let reversedStr = '';//declaring the empty string 
    console.log("lenght of the string",str.length) //5 // max indext is 4
    //i want to replace chartAt(0)with charAt(4)
    //chartAt(1) // chatat(3)
    //abc =>cba
    //Empty string needs to be concatinated with str[str.length-1]
    //empty string is replaced with str[str.lenth-1]
    //str[str.lenght-1]+str[str.length-2]
    //decrement operator => we need to decreate 1 from the i 
    // i is assigned as length-1 => maximum index 
    //as indext starts with zero  -max index is length-1
    for (let i = str.length - 1; i >= 0; i--) {
      console.log("current char at specified index ",i,str.charAt(i))

        reversedStr = reversedStr+str[i];
        console.log("current reverse string with specified iteration",i,reversedStr)
        //empty string +str[4] => t
        //i=3 t+str[3]
        //ts ,i=2 => ts+str[2]
        //tsr ,i=1=>tsr+str[1]
        //tsri,i=0 =>tsri+str[0]
        //tsrif
    }
    return reversedStr;//tsrif
}

console.log(reverseString("ram")); // Output: "tsrif"
// how to print the given in rever order 
//12345  => 54321

var undeclaredVar = 10; 
//define the read only property in the JS object by  using freeze 
const obj = Object.freeze({ name: "John" });
obj.name = "Mike"; //assign the value => modificaiton => this is not allow .
console.log(obj.name) //John => this is a read ony object because of freeze
//but if you use :strict then it throws an error  => 