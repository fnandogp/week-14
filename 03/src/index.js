console.log("Hello World");

const arr = [1, 2, 3];

console.log("arr:", arr);

const arr2 = arr.map((item) => {
  return item ?? item * 2; // Nullish coalescing operator
});

console.log("arr2:", arr2);
