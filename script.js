function add(a, b){
    var sum = a + b;
    return sum
};

function subtract(a, b){
    let amount = a - b;
    return amount
};

function multiply(a, b){
    let amount = a * b;
    return amount
};

function divide(a, b){
    if (b === 0){
        return 'Infinity'
    }
    let amount = a/b;
    return amount
};

function operate(operator, num1, num2){
    switch (operator){
        case '+':
            return add(num1, num2)
            break;
        case '-':
            return subtract(num1, num2)
            break;
        case '*':
            return multiply(num1, num2)
            break;
        case '/':
            return divide(num1, num2)
            break;
    }
};

let input = "2*2+2"
let numArr = input.split(/\D/g);
let opArr = input.split(/\d/g).filter(Boolean);

function masterCalc(numArr, opArr){
    if (opArr.includes('/') === true){
        let ind = opArr.indexOf('/')
        let result = operate('/', numArr[ind], numArr[ind + 1])
        opArr.splice(ind, 1)
        numArr.splice(ind, 2, result)
        masterCalc(numArr,opArr)  
    }
    if (opArr.includes('*') === true){
        let ind = opArr.indexOf('*')
        let result = operate('*', numArr[ind], numArr[ind + 1])
        opArr.splice(ind, 1)
        numArr.splice(ind, 2, result)
        masterCalc(numArr,opArr)  
    }
    if (opArr.includes('+') === true){
        let ind = opArr.indexOf('+')
        let result = operate('+', numArr[ind], numArr[ind + 1])
        opArr.splice(ind, 1)
        numArr.splice(ind, 2, result)
        masterCalc(numArr,opArr)  
    }
    if (opArr.includes('-') === true){
        let ind = opArr.indexOf('-')
        let result = operate('-', numArr[ind], numArr[ind + 1])
        opArr.splice(ind, 1)
        numArr.splice(ind, 2, result)
        masterCalc(numArr,opArr)  
    }
}

masterCalc(numArr, opArr)

console.log(numArr)









