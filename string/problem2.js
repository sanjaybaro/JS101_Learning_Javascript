// Problem 2 : Given an array of string count the overall total number of characters

let str = ["masai", "school", "is", "transforming", "education"];
let sum = 0;
for (i = 0; i < str.length; i++) {
  sum = sum + str[i].length;
}
console.log(sum);

