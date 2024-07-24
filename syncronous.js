// Syncronous & Asyncronous Functions

const Syncronous = () => {
  let a = "Hello";
  let b = "Uzer";
  let c = "Qureshi";
  console.log(a + ", I am " + b + " " + c);
};

// Syncronous();

// Asyncronous Function

const Asyncronous = () => {
  console.log("Hey, I am  ");
  setTimeout(() => {
    console.log("Uzer ");
  }, 2000);
  console.log("Qureshi");
};

Asyncronous();
