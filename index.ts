#!/usr/bin/env node 
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()* 10 + 1);
console.log("Welcome to the number Guessing Game");

const answer = await inquirer.prompt({
    name : "UserGuessedNumber",
    type : "number",
    message : "Please Guess a Number between 1-10:",
});


if (answer.UserGuessedNumber === randomNumber){
console.log("Congratulation ! you Guessed Right number.");
}else{
    console.log("you Gussed wrong number");
}