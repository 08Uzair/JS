// Rest Operator

let sum = 0;
let arr = [20, 30, 500];
const rest = (name, ...num) => {
  for (let i in num) {
    sum += num[i];
  }
  console.log(sum);
  console.log(name);
};
rest("Uzer Qureshi", ...arr);
