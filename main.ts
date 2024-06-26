import inquirer from "inquirer";

let myBalance = 50000;

let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
       {
        name: "q1",
        message: "enter your pin",
        type: "number"
       }
    ]
);
// console.log(pinAnswer.q1);

if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");

//     let operationAns = await inquirer.prompt(
//        [
//           {
//               name:"operation",
//               message:"please select option",
//                 type:"list",
//                 choices: ["withdraw","check balance"]
                    
        
//             }
//         ]
//    )
}
//  else {
//      console.log("incorrect pin number");
// }

