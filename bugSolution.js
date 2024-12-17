function foo(a, b) {
  // Handle null or undefined values for both a and b
  a = a !== null && a !== undefined ? a : 0; 
  b = b !== null && b !== undefined ? b : 0;
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); //Output: 0
console.log(foo(undefined, 5)); // Output: 5