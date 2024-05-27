function clearScreen(){
    document.getElementById('output-screen').value = '0'
}
function del()
{
    let screenValue  = document.getElementById('output-screen').value;
    document.getElementById('output-screen').value = screenValue.slice(0,-1);
}
function display(ak)
{
    let screenValue = document.getElementById('output-screen');
    if(screenValue.value === '0')
    {
        screenValue.value =ak;
    }
    else
    {
        screenValue.value +=ak;
    }
}

function one(){
    let inputCall = document.getElementById('output-screen');
    let input = inputCall.value;
let inputString = input.toString();
let con = [];

for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== '0' && inputString[i] !== '1') {
        inputCall.value = 'Error input';
        break; 
    } else if (inputString[i] === '1') {
        con.push('0');
    } else if (inputString[i] === '0') {
        con.push('1'); 
    }
}

if (con.length === inputString.length) {
    let result = con.join('');
    // Remove leading zeros
    result = result.replace(/^0+/, '');
    inputCall.value = result;
}

}
function seven(){
    let inputCall = document.getElementById('output-screen');
    let input = inputCall.value;
    let inputString = input.toString();
    let m = [];
    for (let i = 0; i < inputString.length; i++) {
        let digit = parseInt(inputString[i]);
        if (digit >= 0 && digit <= 7) {
            let b = 7 - digit;
            m.push(b);
        } else {
            inputCall.value='Error Input';
            break;
        }
    }
    
    if (m.length === inputString.length) {
        let result = m.join('');
        result = result.replace(/^0+/, '');
        inputCall.value = result;
    }
    

}
function nine(){
    let inputCall = document.getElementById('output-screen');
    let input = inputCall.value;
    let inputString = input.toString();
    let m = [];
    for (let i = 0; i < inputString.length; i++) {
        let digit = parseInt(inputString[i]);
        if (digit >= 0 && digit <= 9) {
            let b = 9 - digit;
            m.push(b);
        } else {
            inputCall.value='Error Input';
            break;
        }
    }
    
    if (m.length === inputString.length) {
        let result = m.join('');
        result = result.replace(/^0+/, '');
        inputCall.value = result;
    }
    

}

function fifteen(){
    let inputCall = document.getElementById('output-screen');
    let input=inputCall.value;

let n = [];
let inputString = input.toString();
for (let i = 0; i < inputString.length; i++) {
    let b = inputString[i];
    if (b === 'A') {
        b = 10;
    } else if (b === 'B') {
        b = 11;
    } else if (b === 'C') {
        b = 12;
    } else if (b === 'D') {
        b = 13;
    } else if (b === 'E') {
        b = 14;
    } else if (b === 'F') {
        b = 15;
    } else {
        b = parseInt(b, 16);
    }

    let m = 15 - b;
    if (m === 10) { 
        m = 'A'; 
    } else if (m === 11) { 
        m = 'B'; 
    } else if (m === 12) { 
        m = 'C'; 
    } else if (m === 13) { 
        m = 'D'; 
    } else if (m === 14) { 
        m = 'E'; 
    } else if (m === 15) { 
        m = 'F'; 
    }

    n.push(m);
    if (n.length === inputString.length) {
        let result = n.join('');
        result = result.replace(/^0+/, '');
        inputCall.value = result;
    }
}
}