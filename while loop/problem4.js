// Problem 4: Print the average of even numbers from 1 to 100 (both included).

let a = 1;
let average = 0;
let count = 0;

while (a <= 100) {
  if (a % 2 === 0) {
    count += 1;
    average += a;
  }
  a++;
}
console.log(average / count);
