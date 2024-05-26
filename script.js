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
let inputString = input.toString(); // Convert the input number to a string
let con = [];

for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== '0' && inputString[i] !== '1') {
        inputCall.value = document.getElementById('hii').innerText;
        break; 
    } else if (inputString[i] === '1') {
        con.push('0'); // Use push() to add elements to the array
    } else if (inputString[i] === '0') {
        con.push('1'); // Use push() to add elements to the array
    }
}

if (con.length === inputString.length) {
    let result = con.join('');
    // Remove leading zeros
    result = result.replace(/^0+/, '');
    inputCall.value = result;
}

}