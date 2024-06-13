//WAP to swap 2 numbers without 3rd variable and with 3rd variable 
let a = prompt("Enter the first number (a):");
let b = prompt("Enter the second number (b):");

if (a !== null && b !== null) {
    a = parseFloat(a);
    b = parseFloat(b);

    if (!isNaN(a) && !isNaN(b)) {
        console.log(`Before swap: a = ${a}, b = ${b}`);

      
        let temp = a;
        a = b;
        b = temp;

        console.log(`After swap: a = ${a}, b = ${b}`);
    } else {
        console.log("Invalid input. Please enter valid numbers.");
    }
} else {
    console.log("Input cancelled.");
}
