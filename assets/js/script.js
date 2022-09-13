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
        chapterTwo();
    } else {
        alert("I'm just guessing here and wasting my time! Think...think...");
        incrementTime();
    }

}
});
/**
 * Mistake counter 
 */

function incrementTime() {

    let oldTime = parseInt(document.getElementById("time").innerText);
    document.getElementById("time").innerText = ++oldTime;
      
    if (document.getElementById("time").innerText < 3) {
        console.log("continue")
    } else {
        alert("Party over! You've made too many mistakes and have to start over...");
        location.href = 'index.html';
    }
}

let actualTime = 0;

/**
 * Add chapter 2 and challenge
 */
function chapterTwo() {
    document.getElementById("chapter-two").setAttribute("class", "chapter");
    document.getElementById("chapter-two").innerHTML += "<h2>Chapter 2: Get the flowers!</h2><p>What a smooth ride, the summer evening scenery just flies by. Sixten’s bike is a true beauty. “I will put it back tomorrow, no one will notice, I’m not a criminal”<br>Now, off to the store to get some flowers and a snack.<br>Oh no! It’s that old cashier Greta, she’s been fooling Pete so many times. “Id better do some proper counting myself before lining up.”<br>I got a <strong>10</strong>-bill, the flowers will be <strong>6.25</strong> and a piece of snack <strong>1.50</strong> and some pink chewing gum too at <strong>0.45</strong>. “Hmmm…what will that be in change?”<br></p>";

    /**Input field */
    let guessSum = document.createElement("input");
    guessSum.setAttribute("id","sum1");
    guessSum.setAttribute("type", "number");
    document.getElementById("the-cashier").appendChild(guessSum);
    
    /**Submit answer button */
    let sumButton = document.createElement("input");
    sumButton.setAttribute("id","sum2");
    sumButton.setAttribute("type", "button");
    sumButton.value ="Hmmm...";
    sumButton.addEventListener("click", checkSecondAnswer);
    document.getElementById("the-cashier").appendChild(sumButton);
    

    

    function checkSecondAnswer() {
        let cashierGuess = document.getElementById("sum1").value;
        let trueCashier = 8.20;

        let resultTwo = cashierGuess == trueCashier;

        if (resultTwo) {
            alert("You're a math genius! Now let's go give that girl her birthday flowers!");
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
    document.getElementById("chapter-three").setAttribute("class", "chapter");
    document.getElementById("chapter-three").innerHTML += "<h2>Chapter 3: Long arm of the law!</h2><p>“So glad that I am a math genius!”<br>But outside the store he can see police officer Bob hanging over Sixten’s bike. '-Did you get here on this?' he asks.<br>Pete tries to run but with Bob’s hand on his shoulder he just won’t get anywhere.<br>“-You know, we could forget this if you beat me at dice!” Bob suggests<br></p>";

    
    /**
     * Dice game
     */
    let name1 = document.createElement("div");
    name1.setAttribute("id", "namesDice");
    document.getElementById("the-law").appendChild(name1);
    document.getElementById("namesDice").innerHTML += "<h3>Pete</h3><span><h3>Bob</h3>";

    let diceImage = document.createElement("img");
    diceImage.setAttribute("id", "dice-pic");
    document.getElementById("the-law").appendChild(diceImage);
    diceImage.src = "assets/images/dice2.png";

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
                location.href = 'victory.html';
            };
    }
}