let operations = {
    '+':(a,b) => a + b,
    '-':(a,b) => a - b,
    '/':(a,b) => a / b,
    '*':(a,b) => a * b
}
 
//onclick function to create input string 

let input

function calcInput(str){
//concat strings to create input string
    let val = str
    input = val + input
}

//innerHTML of input string
document.getElementById("output").innerHTML = input
 
// match numbers including decimal

let numArr = input.match(/\d+(?:\.\d+)?/g).map(Number);
// match only valid operation chars, probs not necessary if you'll have only these operation buttons
let opArr = input.match(/[+\-\/*]/g);


function masterCalc(numArr, opArr){
    let ind
    let op
    if (opArr.includes('/')){
        ind = opArr.indexOf('/')
        op = '/'
    }
    else if (opArr.includes('*')){
        ind = opArr.indexOf('*')
        op = '*'  
    }
    else if (opArr.includes('+')){
        ind = opArr.indexOf('+')
        op = '+'
    }
    else if (opArr.includes('-')){
        ind = opArr.indexOf('-')
        op = '-' 
    }
    // need a break condition to break out of recursion
    else if(opArr.length === 0){return}
 
    let result = operations[op](numArr[ind], numArr[ind + 1])
    opArr.splice(ind, 1)
    numArr.splice(ind, 2, result)
    masterCalc(numArr,opArr)
    //innerHTML removal of input string
    document.getElementById("output").innerHTML = (numArr[0])
    
}
 

// call master calc on equal button//

let calc = () => masterCalc(numArr, opArr);

//clear function

 function cle(){
     input = ''
     document.getElementById("output").innerHTML = input
 }






