/*
Write a JavaScript function to check 
whether an `input` is an array or not.
*/
console.clear();
//example-1
// const isArry = (arr) => {
//   if(Array.isArray(arr)){
//     return console.log("Thats an Array");
//   }
//   return console.log("not an Array");
// };

// isArry("")

//example -2
// const isArr = (input) => {
//   if (toString.call(input) === "[object Array]") {
//     return console.log("An Array");
//   }
//   return console.log("not an array");
// };

// isArr([1, 2, 3]);

//example -3

const arrCheck = (arr) => {
  if (arr instanceof Array) {
    return console.log("array");
  }

  if (new String(arr) instanceof String) {
    return console.log("string");
  }

  if (arr instanceof Object) {
    return console.log("object");
  }

  return console.log("something else");
};

arrCheck();
