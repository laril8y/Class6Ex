// exercise 1 
// 1. Create three functions: one global, one as an object method, and an arrow function inside an object.
// 2. Print the value of this inside each function.
// 3. Discuss or note down the differences you observe in the value of this across the three scenarios.

console.log("Printing this at the highest level: ", this);
const objectToCheckThis = {
  vanillaFunction: function () {
    console.log("Printing this in a vanilla function: ",this);
  },
  arrowFunction: () => {
    console.log("Printing this in an arrow function: ", this);
  }
}

