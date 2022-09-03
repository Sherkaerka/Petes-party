/**
 * Lock pick
 */

let submit = document.getElementById("submit");

submit.addEventListener("click", checkAnswer);


function checkAnswer() {

    let firstDigit = document.getElementById("num1").value;
    let trueFirst = 6;
    let secondDigit = document.getElementById("num2").value;
    let trueSecond = 1;
    let thirdDigit = document.getElementById("num3").value;
    let trueThird = 0;
    let result = firstDigit == trueFirst && secondDigit == trueSecond && thirdDigit == trueThird;

    if (result) {
        alert("Oh wow, we got ourselves a little thief! Good job, lets go...");
    } else {
        alert("I'm just guessing here and wasting my time! Think...think...");
    }

}