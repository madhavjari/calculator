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