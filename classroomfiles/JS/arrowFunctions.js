//arrow functions are functions with less syntax
// no need to use the function keyword and return type if it is  single statement arrow function 
hello = function() {
    return "Hello World!";
  }
  function greet(){
    return "This is a greet function"
  }
  console.log(greet())
  console.log(hello)
  console.log(hello()) //hello is a variable with data type function
  sum =function(a,b){
    return a+b
  }
  console.log(sum(1,5))

  //arrow function syntax with one statement 

  let mul = (a, b) => a * b;//arrow function
  console.log(mul(1,5))
  let afuction = (x,y)=>{
    return x*y
  }
  fun=()=>"Hello"
  console.log(fun())
  console.log(afuction(10,2))