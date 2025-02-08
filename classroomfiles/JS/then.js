function doHomework() {
    return new Promise((resolve) => {
      console.log("Doing homework... 📚");
      
      setTimeout(() => {
        resolve("Homework is done! ✅");
      }, 3000); // Wait 3 seconds
    });
  }
  
  doHomework() //function is returning the promise
    .then((message) => {
      console.log(message); 
      console.log("Now you can play video games! 🎮");
    });
  