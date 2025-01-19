function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, <number>"2"); // Type Assertion
// Or using type guard
function isNumber(x: any): x is number {
  return typeof x === 'number';
}
function addSafe(a: number, b: any) : number {
  if (isNumber(b)){
    return a + b;
  } else {
    throw new Error("Type Error: b is not a number");
  }
}

let result2 = addSafe(1, "2"); // throws error
let result3 = addSafe(1, 2); // returns 3