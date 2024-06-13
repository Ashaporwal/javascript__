//WAP to calculate middle 3 values of given 5 digit number for example - 12345 then output will be 2+3+4=9 
let number = prompt("Please enter a 5-digit number:");

if (number !== null) {
    number = parseInt(number);

    if (!isNaN(number) && number >= 10000 && number <= 99999) {
        let strNumber = number.toString(); 
        let sum = 0;

        for (let i = 1; i <= 3; i++) {
            let digit = parseInt(strNumber[i]);
            sum += digit;
        }

        console.log(`The middle three digits are: ${strNumber[1]}, ${strNumber[2]}, ${strNumber[3]}`);
        console.log(`The sum of the middle three digits is: ${sum}`);
    } else {
        console.log("Invalid input. Please enter a valid 5-digit number.");
    }
} else {
    console.log("Input cancelled.");
}
