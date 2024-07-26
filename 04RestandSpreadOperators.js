// Rest Operator

let sum = 0;
let arr = [20, 30, 500];
const rest = (name, ...num) => { // If the (...) is declared above in the place of parameters then it is the Spread Operators
  for (let i in num) {
    sum += num[i];
  }
  console.log(sum);
  console.log(name);
};
rest("Uzer Qureshi", ...arr);// If the (...) is declared below in the function call then it is the Spread Operators
