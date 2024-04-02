#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 13000; // amount in $
let myPin: number = 20203;
const answer = await inquirer.prompt([
  { name: "PIN", message: "Please Enter your PIN :", type: "input" },
]);
if ((answer.PIN == myPin)) {
  console.log("Access Granted");
  let operation = await inquirer.prompt([
    {
      name: "OPERATION",
      message: "What you want to do",
      type: "list",
      choices: ["Withdraw", "Check Balance"],
      
    },
    
  ]);
  if (operation.OPERATION == "Withdraw") {
    let amount = await inquirer.prompt([
      {
        name: "AMOUNT",
        message: "How much you want to withdraw",
        type: "input",
      },
    ]);
    if (amount.AMOUNT > myBalance) {
      console.log("Insufficient Balance");
    } else {
      myBalance = myBalance - amount.AMOUNT;
      console.log("Amount Withdrawn");
      console.log(`Your remaining amount is ${myBalance}`);
    }
  }else {
    console.log(`Your balance is ${myBalance}`);
  }
}
else {
  console.log("Access Denied");
}
