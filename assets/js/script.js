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

/**
 * Time Left Gauge
 */

 google.charts.load('current', {'packages':['gauge']});
 google.charts.setOnLoadCallback(drawChart);

 function drawChart() {

   var data = google.visualization.arrayToDataTable([
     ['Label', 'Value'],
     ['Time Left', 40],
   ]);

   var options = {
     width: 400, height: 120,
     redFrom: 90, redTo: 100,
     yellowFrom:75, yellowTo: 90,
     minorTicks: 5
   };

   var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

   chart.draw(data, options);
   }