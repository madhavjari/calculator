function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function division(a,b){
    if(b === 0){
        return 'Remember infinity sign from FIOS?'
    }
    else{
        return (a/b).toFixed(3);
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
let firstNumber = '';
let secondNumber = '';
let calc = document.querySelector('.calc');
let dis = document.createElement('div');
dis.classList.add('display');
dis.textContent = parseNumber;
calc.insertBefore(dis,calc.children[1]);
let display = document.querySelector('.display');

function createNumber(strNumber,num){
    strNumber = strNumber+num;
    parseNumber = parseFloat(strNumber);
    display.textContent = parseNumber;
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

let clear = document.querySelector('.clear');
clear.addEventListener('click', () =>{
    strNumber = '';
    number = 0;
    display.textContent = number;
})
let operator;

let multiple = document.querySelector('.multiply');
multiple.addEventListener('click',() =>{
    if(firstNumber== ''){
        firstNumber = parseNumber;
        operator = '*';
        display.textContent = parseNumber+ ' ' + operator;
        strNumber = '';
        parseNumber = 0;
    }
    else{
        secondNumber = parseNumber;
    }
})

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