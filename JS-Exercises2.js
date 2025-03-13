console.log("Welcome to the exercise solutions!");
//1. Write a JavaScript program that displays "Hello, World!" in the browser console.
console.log("Hello, World!");
//2. Create a JavaScript function that takes two numbers as input, performs addition, subtraction, multiplication, and division operations
//  on them, and displays the results in the browser console.
function arithmetic(num1, num2) {
    let sum = num1+num2;
    let difference = num1-num2;
    let product = num1*num2;
    let ratio = num1/num2;
    console.log(sum, difference,product,ratio);
}
arithmetic(10,2);
// 3. Write a JavaScript program that prints the numbers 1 to 10 using a for loop and another version using a while loop.
for (let i=1; i<=10; i++) {
    console.log(i);
}

let num=1;
while(num<=10) {
    console.log(num);
    num++;
}
// 4. Write a JavaScript program that checks if a given number is even or odd and displaysthe result in the browser console.
