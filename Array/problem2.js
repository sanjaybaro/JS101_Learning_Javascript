// Problem 2 : Given a character in lower case print the upper case character

let character = "d";
let lowercase_letter = ["a", "b", "c", "d", "e", "f", "g", "h"];
let uppercase_letter = ["A", "B", "C", "D", "E", "F", "G", "H"];

for (let i = 0; i < lowercase_letter.length; i++) {
  if (character == lowercase_letter[i]) {
    character = uppercase_letter[i];
    break;
  }
}
console.log(character);
