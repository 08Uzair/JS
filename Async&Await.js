// ASYNC-AWAIT
// let test = async () => {
//   "true";
// };

// test.then((result) => {
//   console.log(result);
// });

async function test() {
  console.log("A");
  await console.log("B");
  console.log("C");
}
test();
console.log("D");
console.log("E");
