const arrayLiteralsCode = `// An array with no elements
let empty = [];  

// An array with 5 numeric elements
let primes = [2, 3, 5, 7, 11];  

// An array with elements of different data types and a trailing comma (which is allowed)
let misc = [1.1, true, "a",];  

// Using variables and expressions inside array literals
let base = 1024;
let table = [base, base + 1, base + 2, base + 3];  // [1024, 1025, 1026, 1027]

// Array literals can include objects and even other arrays
let b = [
  [1, { x: 1, y: 2 }],
  [2, { x: 3, y: 4 }]
];  // A nested array containing numbers and objects

// Sparse arrays: missing elements between commas
let count = [1, , 3];   // Index 1 is empty (not undefined, actually nonexistent)
let undefs = [ , , ];   // No defined elements, but length is 2`;

const spreadOperatorCode = `// Using the spread operator to copy arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1];  // arr2 is now [1, 2, 3]

// Merging arrays with spread operator
let arr3 = [4, 5];
let merged = [...arr1, ...arr3];  // [1, 2, 3, 4, 5]

// Using spread with objects
let obj1 = {a: 1, b: 2};
let obj2 = {...obj1, c: 3};  // {a: 1, b: 2, c: 3}

// Spread operator with function calls
function sum(x, y, z) {
  return x + y + z;
}
let nums = [1, 2, 3];
console.log(sum(...nums));  // 6`;

const json = {
  subtopics: [
    {
      title_id: 1,
      title: "Array Literals",
      explanation: "Use case of array literals",
      code_examples: arrayLiteralsCode,
    },
    {
      title_id: 2,
      title: "Spread Operator",
      explanation: "How to use the spread operator with arrays and objects",
      code_examples: spreadOperatorCode,
    },
  ],
};

console.log(JSON.stringify(json, null, 2));
