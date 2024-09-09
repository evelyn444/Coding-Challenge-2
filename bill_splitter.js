// Task 1: Calculate the Tip
let bill = 100;
let tip = bill > 20 ? bill * 0.20 : bill * 1;
console.log(`Tip amount is: $${tip}`);

//Task 2: Output Details
console.log(`the bill amount was $100, the tip amount was $20, the total value is $120`);

//Task 3: Create a Function
function calculateTip(bill,tip){
    return bill * tip;
}
console.log(`Total Tip for $100 bill: $${calculateTip(100,0.20)}`);
