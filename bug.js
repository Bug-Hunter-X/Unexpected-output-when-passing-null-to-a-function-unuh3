function foo(a, b) {
  if (a == null || b == null) {
    return null; // This is the buggy line
  } else {
    return a + b; 
  }
}
console.log(foo(null, 1)); //Expected output: null. Actual output: 1