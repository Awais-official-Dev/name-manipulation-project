// before run this program first must run these 2 command in terminal or command line 
// 1.  npm i inquirer
// 2.  npm i --save-dev @types/inquirer
#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
  { message: "Enter Your Name", type: "string", name: "userName" },
  {
    message: "Select your operation to perform Operations",
    type: "list",
    name: "operator",
    choices: ["UPPERCASE", "lowercase", "Titlecase"],
  },
]);
if (answer.operator === "UPPERCASE") {
  console.log(answer.userName.toUpperCase());
} else if (answer.operator === "lowercase") {
  console.log(answer.userName.toLowerCase());
} else if (answer.operator === "Titlecase") {
  console.log(
    answer.userName.charAt(0).toUpperCase() +
      answer.userName.slice(1).toLowerCase()
  );
} else {
  ("Please Enter valid input");
}
