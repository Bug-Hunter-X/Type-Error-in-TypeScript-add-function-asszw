# Type Error in TypeScript add function
This code demonstrates a common type error in TypeScript that occurs due to type mismatches in function arguments. The `add` function is defined to accept two numbers, but the code calls it with a number and a string, resulting in a type error.

## Bug
The bug is in the line `let result = add(1, "2");`. TypeScript's type system detects that the second argument is a string, not a number, which violates the function's type signature.

## Solution
The solution is to ensure that both arguments passed to the `add` function are numbers. This can be achieved through type checking or conversion. In this example, we use a type assertion to convert the second argument to a number.