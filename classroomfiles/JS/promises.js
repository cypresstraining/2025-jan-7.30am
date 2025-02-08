function getChocolate() { //function to  get the choklate
    return new Promise((resolve, reject) => {
      console.log("Mom is checking for chocolate... 🍫");
  
      setTimeout(() => { //need to wait for the checking  - setTimeout()
        let chocolateAvailable = ram; // Change this to false to see rejection
  //chocolateAvailable?resolve("Yay! Here's your chocolate! 🍫"):reject("Sorry, no chocolate today. 😢");
        if (chocolateAvailable) {
          resolve("Yay! Here's your chocolate! 🍫");
        } else {
          reject("Sorry, no chocolate today. 😢");
        }
      }, 2000); // Wait 2 seconds
      //setTimeout(()=>{
        //code for your resolve and reject
        //if conditon is true {resolve:}
        //else {reject }
      // },10000)
    });
  }
  
  getChocolate() //this will retrun a promised outcome after provided setTimeout (deplay)
      .then((message) => console.log(message))  // If Promise is resolved
      //Attaches callbacks for the resolution and/or rejection of the Promise.

//@param onfulfilled — The callback to execute when the Promise is resolved.

//@param onrejected — The callback to execute when the Promise is rejected.

//@returns — A Promise for the completion of which ever callback is executed.
   // .catch((error) => console.log(error));    // If Promise is rejected
  