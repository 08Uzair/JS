function exampleVar() {
  console.log(x); // undefined (hoisting)
  var x = 10;
  // console.log(x); // 10
}
exampleVar();

function exampleLet() {
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  //   console.log(y); It will give the Error :  y is not defined
}
exampleLet();

function exampleConst() {
  const z = 30;
  console.log(z); // 30
  // z = 40; Error: Assignment to constant variable.

  const obj = { a: 1 };
  obj.a = 2; // Allowed
  console.log(obj.a); // 2
}
exampleConst();
