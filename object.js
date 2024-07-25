// let a = "Uzer Qureshi";
// let b = "Btech";

// const obj = {
//   name: a,
//   course: b,
// };
// console.log(obj);
let name = "Uzer Qureshi";
let course = "Btech";

const obj = {
  name,
  course,
  tree() {
    return `My Name is ${name}`;
  },
};
console.log(obj["tree"]());

