//WAP to calculate gross salary of an employee where basic salary must be entered by user in the respect of basic salary company provide 20% extra for the rent allouce and 40% extra for the dernence amount  
let basicSalary = prompt("Please enter the basic salary:");

if (basicSalary !== null) {
    basicSalary = parseFloat(basicSalary);

    if (!isNaN(basicSalary) && basicSalary > 0) {
        let rentAllowance = 0.20 * basicSalary; // 20% of basic salary
        let dearnessAllowance = 0.40 * basicSalary; // 40% of basic salary
        let grossSalary = basicSalary + rentAllowance + dearnessAllowance;

        console.log(`Basic Salary: ${basicSalary}`);
        console.log(`Rent Allowance (20%): ${rentAllowance}`);
        console.log(`Dearness Allowance (40%): ${dearnessAllowance}`);
        console.log(`Gross Salary: ${grossSalary}`);
    } else {
        console.log("Invalid input. Please enter a positive number for the basic salary.");
    }
} else {
    console.log("Input cancelled.");
}
