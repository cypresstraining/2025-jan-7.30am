const kid = {
    name: "Cypress",
    
    askForChocolate: function () {
      console.log(this.name + " asks for chocolate... 🍫");
      
      new Promise((resolve, reject) => {
        setTimeout(() => {
          let chocolateAvailable = Math.random() > 0.5; // Random true/false
  
          if (chocolateAvailable) {
            resolve("Yay! Chocolate found! 🍫");
          } else {
            reject("No chocolate today. 😢");
          }
        }, 2000);
      })
        .then((message) => console.log(this.name + " says: " + message))
        .catch((error) => console.log(this.name + " says: " + error));
    },
  };
  
  kid.askForChocolate();
  //Math() // 
  