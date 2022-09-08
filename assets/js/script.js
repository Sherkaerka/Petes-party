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

        let resultTwo = cashierGuess == trueCashier;

        if (resultTwo) {
            alert("You're a math genius! Now let's go give that girl her birthday flowers!");
            incrementTime();
            chapterThree();
        } else {
            alert("Not again, why didn't I pay attention on math class?");
            incrementTime();
        }
    }
}

/**
 * Adds Chapter 3 including final challenge
 */
function chapterThree() {
    document.getElementById("chapter-three").innerHTML += "<h2>Chapter 3: The long arm of the law!</h2>";

    
    /**
     * Dice game
     */
    
    let peteDice = document.createElement("span");
    peteDice.setAttribute("id", "dice1");
    document.getElementById("the-law").appendChild(peteDice);

    let policeDice = document.createElement("span");
    policeDice.setAttribute("id", "dice2");
    document.getElementById("the-law").appendChild(policeDice);


    /**Roll-the-dice button */
    let rollButton = document.createElement("input");
    rollButton.setAttribute("id","roll");
    rollButton.setAttribute("type", "button");
    rollButton.value ="Roll the dice";
    rollButton.addEventListener("click", rollTheDice);
    document.getElementById("the-law").appendChild(rollButton);



    function rollTheDice() {
        
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            var randomNumber2 = Math.floor(Math.random() * 6) + 1;

            document.getElementById("dice1").textContent = randomNumber1;
            document.getElementById("dice2").textContent = randomNumber2;

  
            if (randomNumber1 === randomNumber2) {
                incrementTime();
            }
  
            else if (randomNumber1 < randomNumber2) {
                incrementTime();
            }
  
            else {
                incrementTime();
            };
    }
}