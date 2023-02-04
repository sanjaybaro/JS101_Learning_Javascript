// Problem 1 : Given a string count the number of words in that string

let str="masai school trasnforming education in india";
let count=0;
for(let i=0;i<str.length;i++){
  if(str[i]==" "){
  count++;
  }
}
console.log("word:",count+1);