function add(firstNumber,secondNumber,strNumber,parseNumber){
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    display.textContent = firstNumber + secondNumber;
    firstNumber = firstNumber + secondNumber;
    secondNumber = undefined;
    strNumber = '';
    parseNumber = 0;
    return [firstNumber,secondNumber,strNumber,parseNumber];
}

function subtract(firstNumber,secondNumber,strNumber,parseNumber){
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    display.textContent = firstNumber - secondNumber;
    firstNumber = firstNumber - secondNumber;
    secondNumber = undefined;
    strNumber = '';
    parseNumber = 0;
    return [firstNumber,secondNumber,strNumber,parseNumber];
}

function multiply(firstNumber,secondNumber,strNumber,parseNumber){
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    display.textContent = firstNumber*secondNumber;
    firstNumber = firstNumber*secondNumber;
    secondNumber = undefined;
    strNumber = '';
    parseNumber = 0;
    return [firstNumber,secondNumber,strNumber,parseNumber];
}

function division(firstNumber,secondNumber,strNumber,parseNumber){
    if(secondNumber === 0){
        display.textContent = firstNumber*secondNumber;
        return [firstNumber,secondNumber,strNumber,parseNumber];
    }
    else{
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        display.textContent = firstNumber/secondNumber;
        firstNumber = firstNumber/secondNumber;
        secondNumber = undefined;
        strNumber = '';
        parseNumber = 0;
        return [firstNumber,secondNumber,strNumber,parseNumber];
    }
}

function floatInput(str){
    do{
        const number = prompt(str);
        if (parseFloat(number) === false) continue;
        else return parseFloat(number);
    }while (true);
}

let strNumber = '';
let parseNumber = 0;
let firstNumber;
let secondNumber;
let prevOperator;
let calc = document.querySelector('.calc');
let dis = document.createElement('div');
dis.classList.add('display');
dis.textContent = parseNumber;
calc.insertBefore(dis,calc.children[1]);
let display = document.querySelector('.display');

function createNumber(strNumber,num){
    strNumber = strNumber+num;
    display.textContent = strNumber;
    parseNumber = parseFloat(strNumber);
    return strNumber;
}

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
dot.addEventListener('click', () => strNumber = createNumber(strNumber,'.'))


let clear = document.querySelector('.clear');
clear.addEventListener('click', () =>{
    strNumber = '';
    firstNumber = undefined;
    secondNumber = undefined;
    prevOperator = undefined;
    number = 0;
    display.textContent = number;
})

let multiple = document.querySelector('.multiply');
multiple.addEventListener('click',() => [strNumber,firstNumber,parseNumber,secondNumber,prevOperator] = operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,'*'));

let divide = document.querySelector('.divide');
divide.addEventListener('click',() => [strNumber,firstNumber,parseNumber,secondNumber,prevOperator] = operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,'/'));

let adding = document.querySelector('.add');
adding.addEventListener('click',() => [strNumber,firstNumber,parseNumber,secondNumber,prevOperator] = operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,'+'));

let subtraction = document.querySelector('.subtract');
subtraction.addEventListener('click',() => [strNumber,firstNumber,parseNumber,secondNumber,prevOperator] = operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,'-'));

let equal = document.querySelector('.equal');
equal.addEventListener('click',() => [strNumber,firstNumber,parseNumber,secondNumber,prevOperator] = operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,'='));

function operation(strNumber,firstNumber,parseNumber,secondNumber,prevOperator,operator){
    if(!firstNumber){
        firstNumber = parseNumber;
        strNumber = '';
        parseNumber = 0;
        prevOperator = operator;
    }
    else if(!secondNumber){
        secondNumber = parseNumber;
        strNumber = '';
        parseNumber = 0;
        if(prevOperator === '+' && operator != undefined) {
            [firstNumber,secondNumber,strNumber,parseNumber] = add(firstNumber,secondNumber,strNumber,parseNumber);
        }
        else if(prevOperator === '-' && operator != undefined) {
            [firstNumber,secondNumber,strNumber,parseNumber] = subtract(firstNumber,secondNumber,strNumber,parseNumber);
        }
        
        else if(prevOperator === '*' && operator != undefined){ 
            [firstNumber,secondNumber,strNumber,parseNumber] = multiply(firstNumber,secondNumber,strNumber,parseNumber);
        }
        else if(prevOperator === '/' && operator != undefined) {
            [firstNumber,secondNumber,strNumber,parseNumber] = division(firstNumber,secondNumber,strNumber,parseNumber);
        }
        else{
            prevOperator = undefined;
        }
        prevOperator = operator;
    }   
    console.log("first= ", firstNumber);
    console.log("second = ",secondNumber);
    console.log(prevOperator);
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