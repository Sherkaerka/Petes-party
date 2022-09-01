document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer()
            }
        });
    }


});

funtion checkAnswer() {

    let userAnswer1 = parseInt(document.getElementById("answer-box1").value);
    let userAnswer2 = parseInt(document.getElementById("answer-box2").value);
    let userAnswer3 = parseInt(document.getElementById("answer-box3").value);
    let isCorrect = userAnswer1 === 6, userAnswer2 === 1, userAnswer3 === 0;

    if (isCorrect) {
        alert("Oh you little thief, this might not end well!")
        incrementTime();
    } else {
        alert("Aarrrrrghh...time fllies and I'm just guessing here!")
        incrementTime();
    }


}

/**
 * Score gauge
 */

function incrementTime()