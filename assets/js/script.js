document.addEventListener("DOMContentLoaded", function() {

/** Start Full Game */
let startGame = document.getElementById("start");
startGame.addEventListener("click", chapterOne);
})
/** 
 * Add chapter 1 and challenge -Getting out of school
 */

function chapterOne(){

    document.getElementById("top-image").src= "assets/images/school.jpg";
    

    document.getElementById("game-area").innerHTML ="";
    document.getElementById("story-area").innerHTML = "";
    document.getElementById("story-area").innerHTML += "<h2>Chapter 1: Getting out of school!</h2><p>As he steps out of the school building, he can see that place isn’t empty as he expected. Instead, the bus-stop is so overcrowded that the last bit of hope to make it to the party leaves him.<br>Pete sits down on the staircase, sobbing and feeling sorry for himself: “Look at this mess, why do this have to be the story of my life!?”<br>Then he sees it, one lonely bike just standing there. It’s not his bike, of course, but maybe if he were just to have a look…<br>It’s locked…combination lock…one could give it a try since everyone else is focusing on trying to climb the first bus approaching the stop.<br>Or I could start walking, what do you think?";

    document.getElementById("game-area").innerHTML += "<h3>What do you wanna do?</h3>";

    let legalChoice = document.createElement("input");
    legalChoice.setAttribute("id","legal");
    legalChoice.setAttribute("type", "button");
    legalChoice.value ="Start walking";
    legalChoice.addEventListener("click", startWalking);
    document.getElementById("game-area").appendChild(legalChoice);
    
    let illegalChoice = document.createElement("input");
    illegalChoice.setAttribute("id","illegal");
    illegalChoice.setAttribute("type", "button");
    illegalChoice.value ="Try to pick the lock";
    illegalChoice.addEventListener("click", lockPick);
    document.getElementById("game-area").appendChild(illegalChoice);  
   
    /** Walking subchapter 1.1 */
    function startWalking(){
        document.getElementById("story-area").innerHTML = "";
        document.getElementById("game-area").innerHTML = "";
        incrementTime();

        document.getElementById("story-area").innerHTML += "<p>So...Pete starts walking and as you can see on the timer above time flies by.<br>After a while Pete's mom drives by and pull over. -Do you need a ride? she asks.<br>Lacking any better option Pete gets into the car knowing that she usually gets lost...<br><br><h4>Your challenge: Remenber the way</h4><br>As you click the button below a number of turns will be reveald for a few second. Remember them and fill it in correctly afterwards. Otherwise you will be delayed.</p>"
        
        
        let revealTurns = document.createElement("input");
        revealTurns.setAttribute("id","illegal");
        revealTurns.setAttribute("type", "button");
        revealTurns.value ="Show the turns";
        revealTurns.addEventListener("click", showTurns);
        document.getElementById("game-area").appendChild(revealTurns); 

        function showTurns(){
            document.getElementById("game-area").innerHTML="left left right left right right";
            setTimeout(function(){
            document.getElementById("game-area").innerHTML = "";
            chooseTurns();        
            },3000);   
        }
    }
    
    function chooseTurns(){
        document.getElementById("game-area").innerHTML +="<h3>Now click the buttons in the right order</h3>";

        let turns = [];
        console.log(turns);

        /**Turn answer buttons */
        let leftTurn = document.createElement("input");
        leftTurn.setAttribute("id","turnLeft");
        leftTurn.setAttribute("type", "button");
        leftTurn.addEventListener("click", pushLeft);
        leftTurn.value ="Left";
        document.getElementById("game-area").appendChild(leftTurn);

        let rightTurn = document.createElement("input");
        rightTurn.setAttribute("id","turnRight");
        rightTurn.setAttribute("type", "button");
        rightTurn.addEventListener("click", pushRight);
        rightTurn.value ="Right";
        document.getElementById("game-area").appendChild(rightTurn);
        
        let displayTurns = document.createElement("div");
        displayTurns.setAttribute("id", "display-turns");
        document.getElementById("game-area").appendChild(displayTurns);

        function pushLeft(){
            turns.push("left");
            console.log(turns);
            document.getElementById("display-turns").innerHTML += "left";
        }

        function pushRight(){
            turns.push("right");
            console.log(turns);
            document.getElementById("display-turns").innerHTML += "right";
        }

        function isEqual(turns, b){
            return turns.join() == b.join();
        }
 
        //Driver Code
        var b = ["left", "left", "right", "left", "right", "right"];
        console.log(isEqual(turns, b));    

        let checkTurn = document.createElement("input");
        checkTurn.setAttribute("id","checkTurns");
        checkTurn.setAttribute("type", "button");
        checkTurn.addEventListener("click", checkTurns);
        checkTurn.value ="Check answer";
        document.getElementById("game-area").appendChild(checkTurn);

        function checkTurns(){
            isEqual
            console.log(isEqual(turns, b));

            if (isEqual(turns, b)) {
                alert("Yes! You're a walking map!");
                chapterTwoTwo();
                incrementTime();
            } else {
                alert("Oh my! you're as lost as Pete's mom! Look at the time, you wasted so much. Now it's time to speed up!");
                chapterTwoTwo();
                incrementTime();
                incrementTime();
                incrementTime();
            }
        }
    }

    /** Pick the lock subchapter 1.2 */
    function lockPick(){
        document.getElementById("story-area").innerHTML = "";
        document.getElementById("game-area").innerHTML = "";

        document.getElementById("story-area").innerHTML += "<p>Ok, let's try the life of a burglar. What might the combination be? <br> I think this is Sixten's bike. It's so funny 'cause his name sound like a number: Six-Ten...let's try that combo...</p>"
    
        /** Combination lock */
        let firstDigit = document.createElement("input");
        firstDigit.setAttribute("id","num1");
        firstDigit.setAttribute("type", "number");
        document.getElementById("game-area").appendChild(firstDigit);
        
        let secondDigit = document.createElement("input");
        secondDigit.setAttribute("id","num2");
        secondDigit.setAttribute("type", "number");
        document.getElementById("game-area").appendChild(secondDigit);
        
        let thirdDigit = document.createElement("input");
        thirdDigit.setAttribute("id","num3");
        thirdDigit.setAttribute("type", "number");
        document.getElementById("game-area").appendChild(thirdDigit);

        /** Try code button */
        let submitButton = document.createElement("input");
        submitButton.setAttribute("id","submit");
        submitButton.setAttribute("type", "button");
        submitButton.value ="Try combination";
        submitButton.addEventListener("click", checkAnswer);
        document.getElementById("game-area").appendChild(submitButton);
    }

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
}


/**
 * Add chapter 2 and challenge -Get the flowers
 */
function chapterTwo() {
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").setAttribute("class", "chapter");
    document.getElementById("story-area").innerHTML += "<h2>Chapter 2: Get the flowers!</h2><p>What a smooth ride, the summer evening scenery just flies by. Sixten’s bike is a true beauty. “I will put it back tomorrow, no one will notice, I’m not a criminal”<br>Now, off to the store to get some flowers and a snack.<br>Oh no! It’s that old cashier Greta, she’s been fooling Pete so many times. “Id better do some proper counting myself before lining up.”<br>I got a <strong>10</strong>-bill, the flowers will be <strong>6.25</strong> and a piece of snack <strong>1.50</strong> and some pink chewing gum too at <strong>0.45</strong>. “Hmmm…what will that be in change?”<br></p>";

    /**Input field */
    let guessSum = document.createElement("input");
    guessSum.setAttribute("id","sum1");
    guessSum.setAttribute("type", "number");
    document.getElementById("game-area").appendChild(guessSum);
    
    /**Submit answer button */
    let sumButton = document.createElement("input");
    sumButton.setAttribute("id","sum2");
    sumButton.setAttribute("type", "button");
    sumButton.value ="Hmmm...";
    sumButton.addEventListener("click", checkSecondAnswer);
    document.getElementById("game-area").appendChild(sumButton);
    

    

    function checkSecondAnswer() {
        let cashierGuess = document.getElementById("sum1").value;
        let trueCashier = 1.8;

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
 * Adds Chapter 2.2
 */

function chapterTwoTwo(){
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML += "<h2>Chapter 2: Go empty handed or not?</h2><p>Ok, so we made it here somehow. Pete is standing on the sidewalk but with no present or any flowers. Going to the store is out of the question. He could go there empty handed and just explain or he could try to steal some flowers from a nearby garden. <br><h2>What do we do?</h2></p>";

    let goToPartyOne = document.createElement("input");
    goToPartyOne.setAttribute("id","go-to-party-one");
    goToPartyOne.setAttribute("type", "button");
    goToPartyOne.value ="Go to Party!";
    goToPartyOne.addEventListener("click", partyOne);
    document.getElementById("game-area").appendChild(goToPartyOne);
    
    let goToPartyTwo = document.createElement("input");
    goToPartyTwo.setAttribute("id","go-to-party-two");
    goToPartyTwo.setAttribute("type", "button");
    goToPartyTwo.value ="Try to Steal flowers!";
    goToPartyTwo.addEventListener("click", partyTwo);
    document.getElementById("game-area").appendChild(goToPartyTwo);  

}


/**
 * Adds Chapter 3 including final challenge -Roll the dice
 */
function chapterThree() {
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";
    
    document.getElementById("story-area").innerHTML += "<h2>Chapter 3: Long arm of the law!</h2><p>“So glad that I am a math genius!”<br>But outside the store he can see police officer Bob hanging over Sixten’s bike. '-Did you get here on this?' he asks.<br>Pete tries to run but with Bob’s hand on his shoulder he just won’t get anywhere.<br>“-You know, we could forget this if you beat me at dice!” Bob suggests<br></p>";

    
    /**
     * Dice game
     */
    let diceImage = document.createElement("img");
    diceImage.setAttribute("id", "dice-pic");
    document.getElementById("game-area").appendChild(diceImage);
    diceImage.src = "assets/images/die.png";
    
    let name1 = document.createElement("div");
    name1.setAttribute("id", "namesDice");
    document.getElementById("game-area").appendChild(name1);
    document.getElementById("namesDice").innerHTML += "<h3>Pete vs. Bob</h3>";

    let peteDice = document.createElement("span");
    peteDice.setAttribute("id", "dice1");
    document.getElementById("game-area").appendChild(peteDice);

    let policeDice = document.createElement("span");
    policeDice.setAttribute("id", "dice2");
    document.getElementById("game-area").appendChild(policeDice);


    /**Roll-the-dice button */
    let rollButton = document.createElement("input");
    rollButton.setAttribute("id","roll");
    rollButton.setAttribute("type", "button");
    rollButton.value ="Roll the dice";
    rollButton.addEventListener("click", rollTheDice);
    document.getElementById("game-area").appendChild(rollButton);

    let scorePete = document.createElement("div");
    scorePete.setAttribute("id", "score-pete");
    document.getElementById("game-area").appendChild(scorePete);
    scorePete.innerHTML ="<h3>Pete's Score</h3><br>";

    let resultPete = document.createElement("span");
    resultPete.setAttribute("id", "result-pete");
    document.getElementById("score-pete").appendChild(resultPete);

    let scoreBob = document.createElement("div");
    scoreBob.setAttribute("id", "score-bob");
    document.getElementById("game-area").appendChild(scoreBob);
    scoreBob.innerHTML ="<h3>Bob's Score</h3><br>";

    let resultBob = document.createElement("span");
    resultBob.setAttribute("id", "result-bob");
    document.getElementById("score-bob").appendChild(resultBob);



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
                bobResult();
            }
  
            else {
                peteResult();
                incrementTime()
            };
    }
}

function peteResult(){
    document.getElementById("result-pete").innerHTML ++;

    if (document.getElementById("result-pete").innerText < 3) {
        console.log("continue")
    } else {
        partyThree();
    }
}

function bobResult(){
    document.getElementById("result-bob").innerHTML ++;
    
    if (document.getElementById("result-bob").innerText < 3) {
        console.log("continue")
    } else {
        partyFour();
    }
}

/**
 * Final scenes depending on user choices
 */

function partyOne(){
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML += "<h2>Hey, you made it!</h2><br><p>You helped Pete to the party. He's not feeling as a winner though, he got there later than necessary, again depending on his mother and without any flowers.</p><br><h3>One last choice are you happy or not?</h3><br><p>There are other ways to do it...</p>";
}

function partyTwo(){
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML += "<h2>Headache</h2><br><p>Pete sneakes into the garden and starts to search for the perfect color combination. He can't hear the old lady with her frying pan coming up behind him.<br>But he can almost hear the bang as she hit the back of his head... </p><br><h3>Game Over</h3><br><p>Try again if you dare!</p>";
}

function partyThree(){
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML +="Yeah!"
}

function partyFour(){
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML +="JAIL!"
}

function partyFive(){
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML +="Party has ended!"
}

/**
 * Score counter 
 */

 function incrementTime() {

    let oldTime = parseInt(document.getElementById("time").innerText);
    document.getElementById("time").innerText = --oldTime;
      
    if (document.getElementById("time").innerText > 0) {
        console.log("continue")
    } else {
        partyFive();
    }
}