const kid = {
    name: "Cypress",
    age: 5,
    sayHello: function () {
      console.log("Hi, Iam  in say hellp function () -my name is " + this.name + "! 👋");
    },
    getName:function(){ console.log(kid.name)//
        console.log("I am in getName Funciton () -my age is :",this.age)//value 
       // console.log(this.getName) //it is a function
       // console.log(this.sayHello)//it is a function
     } //arrow functions shouls not call this 
//this will not be binded with ()=> arrow function 

  };
  //console.log(kid.name)//this.name
  //console.log(kid.age)
  
  kid.sayHello(); // Output: Hi, my name is Tom! 👋
kid.getName()  
//console.log(kid.getName())