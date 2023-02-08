"use strict"
console.log('hello world');

function getInput(){
    document.querySelector('button#generate').addEventListener('click', generate);
}



function generate(){
    const input = document.querySelector("input#input").value;
    const choice = document.querySelector("option");
    const choiceValue = choice.value;
    let output = "unused value";
    console.log(choiceValue);
    console.log(input);
    
    
    //If input is a first name: Make the first character in a name uppercase, and the rest lowercase
    if (choiceValue === "0"){
        output = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
        
    } else (value === ";");
    
    
    console.log(output);
    document.querySelector("input#output").value = output;
}

getInput();