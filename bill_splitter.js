// Task 1: Calculate the Tip
let bill = 100;
let tip = bill 50 <= X <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`Tip amount is: $${tip}`);

//Task 2: Output Details
console.log(`the bill amount was $100, the tip amount was $15, the total value is $115`);

//Task 3: Create a Function
function calculateTip(bill,tip){
    return bill * tip;
}
console.log(`Total Tip for $100 bill: $${calculateTip(100,0.20)}`);

// Task 4: Utilize Arrays
//array of bill prices
let bills = [275,40,430];
//array of tips and totals
const tips = bills.map(bill => calculateTip(bill));
console.log("Bill Amounts: ", bills)
console.log("Tip Amounts: ", tips);