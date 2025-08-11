function add(firstNumber,secondNumber){
    //input numbers in float 
    display.textContent = firstNumber + secondNumber; //displaying addition
    firstNumber = firstNumber + secondNumber; //converting result into first number
    return [firstNumber,secondNumber];
}

function subtract(firstNumber,secondNumber){
    //input numbers in float
    display.textContent = firstNumber - secondNumber; //displaying subtraction
    firstNumber = firstNumber - secondNumber; // converting result into first number
    return [firstNumber,secondNumber];
}

function multiply(firstNumber,secondNumber){
    //input numbers in float
    display.textContent = firstNumber*secondNumber; //displaying multiplication
    firstNumber = firstNumber*secondNumber; // converting result into first number
    return [firstNumber,secondNumber];
}

function division(firstNumber,secondNumber){
    //division by 0 is infinite
    if(secondNumber === 0){
        display.textContent = 'infinite';
        return [firstNumber,secondNumber];
    }
    else{
        //input numbers in float
        display.textContent = firstNumber/secondNumber; //displaying division
        firstNumber = firstNumber/secondNumber; //converting result into first number
        return [firstNumber,secondNumber];
    }
}

let strNumber = ''; //clicked input
let firstNumber; 
let secondNumber;
let prevOperator; 
let justCalculated = false;
let calc = document.querySelector('.calc'); //main class of html

//creating element to display the output of buttons clicked
let dis = document.createElement('div'); 
dis.classList.add('display');
dis.textContent = 0;
calc.insertBefore(dis,calc.children[1]); //adjusting display just above buttons
let display = document.querySelector('.display');

//taking inputs of number
function createNumber(strNumber,value){
    if(!strNumber && value === '.') strNumber = 0;
    strNumber = strNumber+value;
    display.textContent = strNumber;
    return strNumber;
}

calc.addEventListener('click',(event) => {  
    const clickedElement = event.target;
    const value = clickedElement.textContent;
    const parentButton = clickedElement.closest('button');
    var dot = document.querySelector('.dotButton');
    if(parentButton){
        if (!isNaN(parseFloat(value)) || value === '.') {
            if(justCalculated === true){
                strNumber = '';    
                firstNumber = undefined; 
                secondNumber = undefined; 
                prevOperator = undefined; 
                justCalculated = false;
            }
            strNumber = createNumber(strNumber, value);
            if(value === '.') dot.disabled = true;
        }
        else if(operators.includes(value)){
            justCalculated = false;
            [strNumber,firstNumber,secondNumber,prevOperator,justCalculated] = operation(strNumber,firstNumber,secondNumber,prevOperator,value,justCalculated);
            if(firstNumber)dot.disabled = false;
        }
        else if(value === 'Clear'){
            dot.disabled = false;
            strNumber = '';
            firstNumber = undefined;
            secondNumber = undefined;
            prevOperator = undefined;
            display.textContent = 0;
            justCalculated = false;
        }
        else if(value === '⌫' && strNumber){
            strNumber = strNumber.slice(0,-1);
            if(!strNumber) display.textContent = 0;
            else display.textContent = strNumber;
        }
    }
})

//main oepration
function operation(strNumber,firstNumber,secondNumber,prevOperator,operator,justCalculated){
    if (operator !== '=' && strNumber !== ''){
    //if first number does not exist, the parse number becomes first number
        if(!firstNumber){
            firstNumber = parseFloat(strNumber);
            console.log("first = ", firstNumber);   
        }
        //if second number does not exist, the parse number becomes second number
        else if(!secondNumber) {
            secondNumber = parseFloat(strNumber);
            console.log("second", secondNumber);
            if(prevOperator === '+')[firstNumber,secondNumber] = add(firstNumber,secondNumber);
            else if(prevOperator === '-')[firstNumber,secondNumber] = subtract(firstNumber,secondNumber);
            else if(prevOperator === '*') [firstNumber,secondNumber] = multiply(firstNumber,secondNumber);
            else if(prevOperator === '/') [firstNumber,secondNumber] = division(firstNumber,secondNumber);
            console.log('first in !sec = "',firstNumber);
            justCalculated = false;
        }  
        strNumber = '';
        secondNumber = undefined;
        prevOperator = operator; 
    }
    else if(operator === '=' && strNumber !== ''){
        if(!firstNumber) prevOperator = undefined;
        else{
            if(!secondNumber)  secondNumber = parseFloat(strNumber);
            if(prevOperator === '+')[firstNumber,secondNumber] = add(firstNumber,secondNumber);
            else if(prevOperator === '-')[firstNumber,secondNumber] = subtract(firstNumber,secondNumber);
            else if(prevOperator === '*') [firstNumber,secondNumber] = multiply(firstNumber,secondNumber);
            else if(prevOperator === '/') [firstNumber,secondNumber] = division(firstNumber,secondNumber);
            console.log("first in equal = ",firstNumber);
            justCalculated = true;
        }
    }
    else if (firstNumber !== undefined && strNumber === ''){
        prevOperator = operator;
        justCalculated = false;
    }
    return [strNumber,firstNumber,secondNumber,prevOperator,justCalculated];
}

const operators = ['+' ,'-', '*', '/', '='];