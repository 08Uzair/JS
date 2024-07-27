// try/catch method works synchronosly
try {
  console.log("first check");
  setTimeout(() => {
    console.log("third check");
  }, 2000);
  console.log("second check");
} catch (error) {
  console.log(`Some error had occured : ${error}`);
}
// RangeError
// ReferenceError
// SyntaxError -- By Giving the Wrong Syntax
// TypeError -- IT is a dataType Error
// URIError --> While giving the URL in a Variable or givin in a wrong way
// AggregateError --> In Promise