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
    else if(choiceValue === "4"){
        // output = input.endsWith(".png") || input.endsWith(".jpg");
        // if(output){
        //     output = "this file is a png or jpg ";
        // }else {
        //     output = "this file is not a png or jpg ";
        // }
        //a different way of doing it
        if(input.endsWith(".png")){
            output = "this file is a png";
        } else if(input.endsWith(".jpg")) {
            output = "this file is a jpg";
        } else {
            output = "this file isn't a png or a jpg"
        }


    }
    
    
    console.log(output);
    document.querySelector("input#output").value = output;
}

getInput();