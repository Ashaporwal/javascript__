// WAP to number to add first and last digit of a 4 digit number for example no is 7928 then output will be 7+8=15 
let number = prompt("Please enter a 4-digit number:");

if (number !== null) {
    number = parseInt(number);

    if (!isNaN(number) && number >= 1000 && number <= 9999) {
        let firstDigit = Math.floor(number / 1000); 
        let lastDigit = number % 10; 

        let sum = firstDigit + lastDigit;

        console.log(`The first digit is: ${firstDigit}`);
        console.log(`The last digit is: ${lastDigit}`);
        console.log(`The sum of the first and last digit is: ${sum}`);
    } else {
        console.log("Invalid input. Please enter a valid 4-digit number.");
    }
} else {
    console.log("Input cancelled.");
}
