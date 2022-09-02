/**
 * Lock pick
 */

let submit = document.getElementById("submit");

submit.addEventListener("click", checkAnswer);


function checkAnswer() {

    let firstDigit = document.getElementById("num1").value;
    let trueFirst = 6;
    let result = firstDigit == trueFirst;

    if (result) {
        alert("Oh wow, we got ourselves a little thief! Good job, lets go...");
    } else {
        alert("I'm just guessing here and wasting my time! Think...think...");
    }

}