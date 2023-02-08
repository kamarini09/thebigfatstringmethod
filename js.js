"use strict"
console.log('hello world');

function getInput(){
    document.querySelector('button#generate').addEventListener('click', generate);
}



function generate(){
    const input = document.querySelector("input#input").value;
    const choice = document.getElementById("choice");
    const choiceValue = choice.value;
    let output = "";
    console.log(choiceValue);
    console.log(input);
    
    
    //If input is a first name: Make the first character in a name uppercase, and the rest lowercase
    if (choiceValue === "0"){
        output = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
        
    } 
    else if(choiceValue === "1"){
        output = input.substring(0,input.indexOf(" "));
    }
    
    else if(choiceValue === "2"){
        output = input.substring(0,input.indexOf(" ")).length;
    }
    else if(choiceValue === "3"){
        output = `${input.indexOf(" ")+1} , ${input.lastIndexOf(" ")} , ${input.substring(input.indexOf(" ")+1 , input.lastIndexOf(" "))} `;
    }
    
    
    console.log(output);
    document.querySelector("input#output").value = output;
}

getInput();