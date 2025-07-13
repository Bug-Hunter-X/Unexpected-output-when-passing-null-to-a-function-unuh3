# Unexpected Output When Passing Null to a Function

This repository demonstrates a common JavaScript bug related to null value handling.

## Bug Description
The `foo` function is intended to return `null` if either of its arguments is `null`. However, due to a flaw in the null check, it behaves unexpectedly.  The incorrect implementation uses `==` instead of `===`, causing type coercion that leads to an incorrect result when null is involved.

## Bug Solution
The solution uses the strict equality operator (`===`) to correctly check for null values without type coercion. This ensures that the function behaves as intended, returning `null` only when either argument is strictly null.

## How to Reproduce
1. Clone the repository.
2. Run `bug.js` using a JavaScript runtime environment (Node.js).
3. Observe the unexpected output.
4. Run `bugSolution.js` to see the corrected behavior.