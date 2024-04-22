import inquirer from "inquirer";

const currency : any =  {
    USD : 1,
    SAR : 3.75,
    TRY : 32.51,
    THB : 37.06,
    AUD : 1.55,
    EUR : 0.94,
    HKD :7.84,
    PKR :278


};

let userAnswer = await inquirer.prompt(
    [
        {
            name : "from",
            message : "Enter Your Currency",
            type : "list",
            choices : ["USD", "SAR", "TRY", "THB"," AUD", "EUR", "HKD", "PKR"]
        },
        {
            name : "to",
            message : "Enter Your Currency",
            type : "list",
            choices : ["USD", "SAR", "TRY", "THB"," AUD", "EUR", "HKD", "PKR"]
        },
        {
            name : "amount",
            message : "Enter your amount",
            type : "number"

        }
    ]
)

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = amount * toAmount
console.log(convertedAmount);

