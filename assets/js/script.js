/**
 * Lock pick
 */
document.addEventListener("DOMContentLoaded", function() {
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
        incrementTime();
        chapterTwo();
    } else {
        alert("I'm just guessing here and wasting my time! Think...think...");
        incrementTime();
        chapterTwo();
    }

}
});
/**
 * Time Left Gauge
 */
  
google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Time Left', actualTime]
    ]);

     var options = {
        width: 400, height: 120,
        redFrom: 9, redTo: 10,
        yellowFrom:7, yellowTo: 9,
        minorTicks: 5, max:10
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

    chart.draw(data, options);
    }

/**
* Add XX to the gauge everytime a try on a challenge has been made, no matter 
* wether it is right or wrong
*/
function incrementTime() {

    let oldTime = parseInt(document.getElementById("time").innerText);
    document.getElementById("time").innerText = ++oldTime;
      
}

let actualTime = 0;

/**
 * Add chapter 2 and challenge
 */
function chapterTwo() {
    document.getElementById("chapter-two").innerHTML += "<h2>Chapter 2: Get the flowers!</h2>";
    

    /**Input field */
    let guessSum = document.createElement("input");
    guessSum.setAttribute("id","sum1");
    guessSum.setAttribute("type", "number");
    document.getElementById("the-cashier").appendChild(guessSum);
    
    /**Submit answer button */
    let sumButton = document.createElement("input");
    sumButton.setAttribute("id","sum2");
    sumButton.setAttribute("type", "button");
    sumButton.value ="Try me";
    sumButton.addEventListener("click", checkSecondAnswer);
    document.getElementById("the-cashier").appendChild(sumButton);
    

    

    function checkSecondAnswer() {
        let cashierGuess = document.getElementById("sum1").value;
        let trueCashier = 70;

        let resultTwo = cashierGuess === trueCashier;

        if (resultTwo) {
            alert("Oh wow, we got ourselves a little thief! Good job, lets go...");
        } else {
            alert("I'm just guessing here and wasting my time! Think...think...");
            incrementTime();
        }
    }
}
