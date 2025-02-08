const kid = {
    name: "Cypress",
    sayHello: function() {
  console.log("I am inside the sayHello()",this.name)//it will print kid.name
      setTimeout(()=> {
        console.log("Hi,I am inside setTimeout - my name is " + this.name + "! 👋"); // ❌ Error: `this` is undefined
      }, 2000);
    },
  };
  
  kid.sayHello();
  