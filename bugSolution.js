function foo(a, b) {
  if (a === null || b === null) {
    return null;
  } else {
    return a + b; 
  }
}
console.log(foo(null, 1)); // Expected and actual output: null