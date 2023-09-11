let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];

let result = 0;

for (let number of arr1) {
  result += number;
}

console.log(result);

result = 0;

for (let number of arr2) {
  result += number;
}

console.log(result);
