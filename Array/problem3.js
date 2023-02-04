// Problem 3 : Given an array of numbers find the average of all the even numbers.

let num=[1,2,3,4,5];
let average=0;
let count=0;

for(let i=0;i<num.length;i++){
  if(num[i]%2==0){
    average=average+num[i];
    count++
  }
}
console.log(average/count);
