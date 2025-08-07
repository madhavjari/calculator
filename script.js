function add(firstNumber,secondNumber){
    //input numbers in float 
    firstNumber = parseFloat(firstNumber); 
    secondNumber = parseFloat(secondNumber);
    display.textContent = firstNumber + secondNumber; //displaying addition
    firstNumber = firstNumber + secondNumber; //converting result into first number
    return [firstNumber,secondNumber];
}

function subtract(firstNumber,secondNumber){
    //input numbers in float
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    display.textContent = firstNumber - secondNumber; //displaying subtraction
    firstNumber = firstNumber - secondNumber; // converting result into first number
    return [firstNumber,secondNumber];
}

function multiply(firstNumber,secondNumber){
    //input numbers in float
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
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
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        display.textContent = firstNumber/secondNumber; //displaying division
        firstNumber = firstNumber/secondNumber; //converting result into first number
        return [firstNumber,secondNumber];
    }
}

function floatInput(str){
    do{
        const number = prompt(str);
        if (parseFloat(number) === false) continue;
        else return parseFloat(number);
    }while (true);
}

let strNumber = ''; //clicked input
let parseNumber = 0; //variable for converting input to float
let firstNumber; 
let secondNumber;
let prevOperator; 
let calc = document.querySelector('.calc'); //main class of html

//creating element to display the output of buttons clicked
let dis = document.createElement('div'); 
dis.classList.add('display');
dis.textContent = parseNumber;
calc.insertBefore(dis,calc.children[1]); //adjusting display just above buttons
let display = document.querySelector('.display');

//taking inputs of number
function createNumber(strNumber,num){
    strNumber = strNumber+num;
    display.textContent = strNumber;
    parseNumber = parseFloat(strNumber);
    return strNumber;
}

//clicking 0-9 and dot and taking input
let one = document.querySelector('.one');
one.addEventListener('click',() => strNumber = createNumber(strNumber,'1'));

let two = document.querySelector('.two');
two.addEventListener('click',() => strNumber = createNumber(strNumber,'2'));

let three = document.querySelector('.three');
three.addEventListener('click',() => strNumber = createNumber(strNumber,'3'));

let four = document.querySelector('.four');
four.addEventListener('click',() => strNumber = createNumber(strNumber,'4'));

let five = document.querySelector('.five');
five.addEventListener('click',() => strNumber = createNumber(strNumber,'5'));

let six = document.querySelector('.six');
six.addEventListener('click',() => strNumber = createNumber(strNumber,'6'));

let seven = document.querySelector('.seven');
seven.addEventListener('click',() => strNumber = createNumber(strNumber,'7'));

let eight = document.querySelector('.eight');
eight.addEventListener('click',() => strNumber = createNumber(strNumber,'8'));

let nine = document.querySelector('.nine');
nine.addEventListener('click',() => strNumber = createNumber(strNumber,'9'));

let zero = document.querySelector('.zero');
zero.addEventListener('click',() => strNumber = createNumber(strNumber,'0'));

let dot = document.querySelector('.dot');
dot.addEventListener('click', () => strNumber = createNumber(strNumber,'.'));

//clear the display when clicked
let clear = document.querySelector('.clear');
clear.addEventListener('click', () =>{
    strNumber = '';
    str = '';
    firstNumber = undefined;
    secondNumber = undefined;
    prevOperator = undefined;
    number = 0;
    display.textContent = number;
})

//operators when clicked
let multiple = document.querySelector('.multiply');
multiple.addEventListener('click',() =>  [strNumber,firstNumber,parseNumber,secondNumber,prevOperator] = operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,'*'));

let divide = document.querySelector('.divide');
divide.addEventListener('click',() => [strNumber,firstNumber,parseNumber,secondNumber,prevOperator] = operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,'/'));

let adding = document.querySelector('.add');
adding.addEventListener('click',() => [strNumber,firstNumber,parseNumber,secondNumber,prevOperator] = operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,'+'));

let subtraction = document.querySelector('.subtract');
subtraction.addEventListener('click',() => [strNumber,firstNumber,parseNumber,secondNumber,prevOperator] = operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,'-'));

let equal = document.querySelector('.equal');
equal.addEventListener('click',() => [strNumber,firstNumber,parseNumber,secondNumber,prevOperator] = operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,'='));

//main oepration

function operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,operator){
    //if first number does not exist, the parse number becomes first number
    if(!firstNumber){
        firstNumber = parseNumber;
        strNumber = '';
        parseNumber = 0;
        prevOperator = operator;
    }
    else{
        //if second number does not exist, the parse number becomes second number
        if(!secondNumber){
            secondNumber = parseNumber;
        }
        console.log("second = ",secondNumber);
        console.log("prev = ",prevOperator);
        if(prevOperator === '+' && operator === '='){
            [firstNumber,secondNumber] = add(firstNumber,secondNumber);
        }
        else if(prevOperator === '+' && operator != undefined) {
            secondNumber = parseNumber;
            [firstNumber,secondNumber] = add(firstNumber,secondNumber);
            secondNumber = undefined;
            strNumber = '';
            parseNumber = 0;
        }
        else if(prevOperator === '-' && operator === '='){
            [firstNumber,secondNumber] = subtract(firstNumber,secondNumber);
        }
        else if(prevOperator === '-' && operator != undefined) {
            secondNumber = parseNumber;
            [firstNumber,secondNumber] = subtract(firstNumber,secondNumber);
            secondNumber = undefined;
            strNumber = '';
            parseNumber = 0;
        }
        else if(prevOperator === '*' && operator === '='){
            [firstNumber,secondNumber] = multiply(firstNumber,secondNumber);
        }
        else if(prevOperator === '*' && operator != undefined){
            console.log("multi= ",parseNumber);
            secondNumber = parseNumber;
            [firstNumber,secondNumber] = multiply(firstNumber,secondNumber);
            secondNumber = undefined;
            strNumber = '';
            parseNumber = 0;
        }
        else if(prevOperator === '/' && operator === '='){
            [firstNumber,secondNumber] = division(firstNumber,secondNumber);
        }
        else if(prevOperator === '/' && operator != undefined) {
            secondNumber = parseNumber;
            [firstNumber,secondNumber] = division(firstNumber,secondNumber);
            secondNumber = undefined;
            strNumber = '';
            parseNumber = 0;
        }
        else{
            prevOperator = undefined;
            console.log('prev ope in equal');
        }
        if(operator != '=') prevOperator = operator;
    }   
    console.log("first= ", firstNumber);
    console.log("second num = ",secondNumber);
    //console.log("prevopera= ",prevOperator);
    console.log("operator= ", operator);
    return [strNumber,firstNumber,parseNumber,secondNumber,prevOperator];
}

const operators = ['+' ,'-', '*', '/'];

function operate(){
    const firstNumber = floatInput('Enter first number');
    let operator;
    do{
        operator = prompt('Enter Operator(+,-,*,/)');
        if(operators.includes(operator)) break;
        else continue;
    }while (true);

    const secondNumber = floatInput('Enter second number');
    if(operator === '+') console.log(add(firstNumber,secondNumber));
    if(operator === '-') console.log(subtract(firstNumber,secondNumber));
    if(operator === '*') console.log(multiply(firstNumber,secondNumber));
    if(operator === '/') console.log(division(firstNumber,secondNumber));
}
//operate();