#! /usr/bin/env node
import inquirer from "inquirer"
const answers:{
    sentence : string
} = await inquirer.prompt([{
    name: "sentence",
    type: "input",
    message: "Enter Your Sentence to count total words"
}]);
const words = answers.sentence.trim().split(" ");
console.log(words)
console.log(`Your Sentence total words are ${words.length}`)