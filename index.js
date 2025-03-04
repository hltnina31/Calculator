// Calculator program

const display = document.getElementById("display");

function appendToDisplay (input){
    display.value += input; //access its value append it with += our input
}

function calculate(){
   try{ //try-block, catch errors
    display.value = eval(display.value); //eval=takes an expression and evaluates it
   }
   catch(error){
    display.value = "not defined";
   }
    
}

function clearDisplay(){
    display.value = ""; 
}

function back(){
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}