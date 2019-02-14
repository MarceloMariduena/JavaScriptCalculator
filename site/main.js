// Stores inputs from the user
let inputs = [""];
    
// Stores current string input
let totalString = "";

// Array of operators
let operators1 = ["+", "-", "/", "*"];

// .
let operators2 = ["."];

// Numbers to validate
let nums = [0,1,2,3,4,5,6,7,8,9];

function getValue(input){
    if(operators2.includes(inputs[inputs.length-1])===true && input === "."){
        console.log("Duplicate '.' ");
    }
    else if(inputs.length===1 && operators1.includes(input)===false){
        inputs.push(input);
    }
    else if (operators1.includes(inputs[inputs.length-1])===false){
        inputs.push(input);
    }
    else if (nums.includes(Number(input))){
        inputs.push(input);
    }
    update();
}

// Updates the output box
function update(){
    totalString = inputs.join("");
    document.getElementById("steps").innerHTML = totalString;
}
  
// Computes 
function getTotal(){
    totalString = inputs.join("");
    document.getElementById("steps").innerHTML = eval(totalString);
}

// Logical function for buttons pressed
function deploy(){
    if(this.id == "deleteAll"){
        inputs = [""];
        update(); 
    }
    else if (this.id == "backOne"){
        inputs.pop();
        update();
    }
    else if (this.id == "total"){
        getTotal();
    }
    else {
        if(inputs[inputs.length -1].indexOf("+","-","/","*") === -1){
            getValue(this.id);
        }
        else {
            getValue(this.id);
        }
      
    }
}

// Finally whenever a button is clicked, deploy the function
document.getElementById("deleteAll").addEventListener("click", deploy);
document.getElementById("backOne").addEventListener("click", deploy);
document.getElementById("0").addEventListener("click", deploy);
document.getElementById("1").addEventListener("click", deploy);
document.getElementById("2").addEventListener("click", deploy);
document.getElementById("3").addEventListener("click", deploy);
document.getElementById("4").addEventListener("click", deploy);
document.getElementById("5").addEventListener("click", deploy);
document.getElementById("6").addEventListener("click", deploy);
document.getElementById("7").addEventListener("click", deploy);
document.getElementById("8").addEventListener("click", deploy);
document.getElementById("9").addEventListener("click", deploy);
document.getElementById(".").addEventListener("click", deploy);
document.getElementById("*").addEventListener("click", deploy);
document.getElementById("/").addEventListener("click", deploy);
document.getElementById("+").addEventListener("click", deploy);
document.getElementById("-").addEventListener("click", deploy);
document.getElementById("total").addEventListener("click", deploy);
