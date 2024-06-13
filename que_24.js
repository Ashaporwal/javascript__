//WAP to add middle 2 number of a 4 digit number ex - 7281 then output will be 2+8 = 10 
let number = prompt("Please enter a 4-digit number:");

if (number !== null) {
    number = parseInt(number);

    if (!isNaN(number) && number >= 1000 && number <= 9999) {
        // Extracting the middle two digits
        let middleDigits = Math.floor((number / 10) % 100); // This gives us the middle two digits
        let firstDigit = Math.floor(middleDigits / 10); // Extract the first digit of the middle two
        let lastDigit = middleDigits % 10; // Extract the last digit of the middle two

        let sum = firstDigit + lastDigit;

        console.log(`The middle digits are: ${middleDigits}`);
        console.log(`The sum of the middle two digits (${firstDigit} + ${lastDigit}) is: ${sum}`);
    } else {
        console.log("Invalid input. Please enter a valid 4-digit number.");
    }
} else {
    console.log("Input cancelled.");
}
