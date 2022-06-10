const input = require('prompt-sync')();

console.log("Hello! My name is Aid." + "\n" +
  "I was created in 2022.");
let name = input("Please, remind me your name. ", "");

if (name != null) {
    console.log("What a great name you have, " + name + "!");
}

console.log("Let me guess your age." + "\n" +
  "Enter remainders of dividing your age by 3, 5 and 7.");

let remainder3 = input();
let remainder5 = input();
let remainder7 = input();

let age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

console.log("Your age is " + age + "; that's a good time to start programming!");
console.log("Now I will prove to you that I can count to any number you want.");

let count = input();
let start = 0;

while (start <= count) {
    console.log(start + " !");
    start++;
}

console.log("Let's test your programming knowledge.")
console.log("Why do we use methods?" + "\n" +
  "1. To repeat a statement multiple times." + "\n" +
  "2. To decompose a program int several small subroutines." + "\n" +
  "3. To determine the execution time of a program." + "\n" +
  "4. To interrupt the execution of a program.");

let condition = true;
let multChoiceAns;

while (condition) {
    multChoiceAns = input();
    if (multChoiceAns === "2") {
        console.log("Completed, have a nice day!");
        condition = false;
    } else {
        console.log("Please, try again.");
    }
}
console.log("Congratulations, have a nice day!");
