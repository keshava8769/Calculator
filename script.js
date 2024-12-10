// script.js  

let currentValue = '';  

function appendToDisplay(value) {  
    currentValue += value;  
    document.getElementById("display").value = currentValue;  
}  

function clearDisplay() {  
    currentValue = '';  
    document.getElementById("display").value = '';  
}  

function calculateResult() {  
    try {  
        currentValue = eval(currentValue).toString();  
        document.getElementById("display").value = currentValue;  
    } catch (error) {  
        currentValue = 'Error';  
        document.getElementById("display").value = currentValue;  
    }  
}