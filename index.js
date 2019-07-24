let final = 0;
let btnClick = document.getElementById("button");

function checkNum(number) {
    let numString = number.toString();
    let numArray = numString.split('');
    let finArray = [];
    for (let index = 0; index < numArray.length; index++) {
        let element = Math.pow(numArray[index],numString.length);
        finArray.push(element);
    }
    return finArray;
}

let check = btnClick.addEventListener("click", function(){
    var userInput = document.getElementById("text").value;
    let funResult = checkNum(userInput);
    
    for (let index = 0; index < funResult.length; index++) {
        final += funResult[index];
    }

    let output = document.getElementById('hello');
    if (final == userInput) {
        let text = "This number is a narcissistic number";
        output.textContent = text;
    } else {
        let text = "This number is a not narcissistic number";
        output.textContent = text;
    }
   final = 0;
})