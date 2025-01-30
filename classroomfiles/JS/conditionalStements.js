//1. if => if block code will execute only when the conditon is satisfied
/*
let x=12
if(x<20){ //true then - if block code will execute
    console.log("X is less than 20  hence if block is executed",x)
}
//2. else => this block is executed only when the above conditon is not satisfied 
else{
    console.log("X is not less than 20- then else conditon is executed",x)
}
//if -else if - else if - else 
//whenever we do have more than 2 conditons then we need to use else-if inaddtion to if block 
}
*/
let age =65
if(age>60){ //if it is true will print i am senior citzen
    console.log("I an in if block - and i am  a senior citigen- My age is :",age)
}
else if(age>18 && age<=60){ //if is fail and  this condition is true then print adult 
    console.log("I an in first else -if block - and i am  a adult- My age is :",age)

}
else if(age<18 && age>14){ //if fail , else if fail - child
    console.log("I an in second else if block - and i am a child- My age is :",age)

}
else if(age<14 && age>2){//if fail , else if , else if fail - kid 
    console.log("I an in 3rd else- if block - and i am a kid- My age is :",age)

}
else{//if fail - else-if fail , else-if fail , else if fail - else will execute 
    console.log("I an in if block - and i am  a infant- My age is :",age)

}

//if we use only one conditon to be execute only when it is true 
//if else we use when we do have true conditon and false 
//if -else-if -else we use when we do have more conditons to be verified 

/*

switch is also used to verify multiple conditons on the same experession 

switch(expression){
  case 1:
    //statement 
    break
   case 2:
    //statement 
    break
    default : 
    //statement 
}
*/

let exp=1


switch(exp){
case 1:
    console.log("my case is 1 from switch 1")
    break //is used to stop your case

case 2:
    console.log("my case is 2")
case 3:
    console.log("my case 3")

}

let fruit="JS"

switch(fruit){
    case "apple":
        console.log("my case is apple")
        break //is used to stop your case
    
    case "banana":
        console.log("my case is banana")
        break
    case "orange":
        console.log("my case orange")
      break
    case "papaya":
        console.log("my case is papaya")
        break
      default:
        console.log("nothing matches!")
    
    }
    //i want to print which day it is 
    //or which month it is by using switch statement 
    //how to capture current date - date 
    //Date 
    let currentDate=new Date();
    console.log(currentDate)
    console.log(new Date().getDate())//30
    console.log(new Date().getDay())//0 to 6 - 4 //Thursday - 0-sunday
    console.log(new Date().getFullYear())//2025
    console.log(new Date().getMonth())//0 to 11
    //day is numeric and need to verify  which day is my current day and print that day
switch(currentDate.getDay()){
    case 0:
        console.log("current day is Sunday :")
        break
    case 1:
        console.log("current day is Monday :")
        break
    case 2:
        console.log("current day is Tuesday :")
        break
    case 3:
        console.log("current day is Wednesday :")
        break
    case 4:
        console.log("current day is Thursday :")
        break
    case 5:
        console.log("current day is Friday :")
        break
    case 6:
        console.log("current day is Saturday :")
        break
    default:
        console.log("invalid day ")
}
//you need to print month  in the switch statement 
//print whether the currnet year is leap year or not 
//print the given number is prime number or not
// print the given number is even or odd
//loops - for loop -for in - object , for of for array /strings - and while and do -while 

    