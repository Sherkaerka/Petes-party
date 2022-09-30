/** Start Full Game */
let startGame = document.getElementById("start");
startGame.addEventListener("click", chapterOne);

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
        document.getElementById("top-image").src= "assets/images/road.jpg";
        
        document.getElementById("story-area").innerHTML = "";
        document.getElementById("game-area").innerHTML = "";
        incrementTime();

        document.getElementById("story-area").innerHTML += "<p>So...Pete starts walking and as you can see on the timer above time flies by.<br>After a while Pete's mom drives by and pull over. -Do you need a ride? she asks.<br>Lacking any better option Pete gets into the car knowing that she usually gets lost...<br><br><h4>Your challenge: Memorize the way</h4><br>As you click the button below a number of turns will be reveald for a few second. Remember them and fill it in correctly afterwards. Otherwise you will be delayed.</p>"
        
        
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
        document.getElementById("top-image").src= "assets/images/sixtens_bike.jpg";

        document.getElementById("story-area").innerHTML = "";
        document.getElementById("game-area").innerHTML = "";
        incrementTime();
        
        document.getElementById("story-area").innerHTML += "<p>Ok, let's try the life of a burglar. What might the combination be? <br> I think this is Sixten's bike. It's so funny 'cause his name sound like a number: Six-Ten...let's try that combo...</p><br>"
        
        /** Combination lock */
        let firstDigit = document.createElement("input");
        firstDigit.setAttribute("id","num1");
        firstDigit.setAttribute("type", "number");
        firstDigit.setAttribute("max", "9");
        firstDigit.setAttribute("min", "0");
        firstDigit.setAttribute("oninput","validity.valid||(value='')");
        document.getElementById("game-area").appendChild(firstDigit);
        
        let secondDigit = document.createElement("input");
        secondDigit.setAttribute("id","num2");
        secondDigit.setAttribute("type", "number");
        secondDigit.setAttribute("max", "9");
        secondDigit.setAttribute("min", "0");
        secondDigit.setAttribute("oninput","validity.valid||(value='')");
        document.getElementById("game-area").appendChild(secondDigit);
        
        let thirdDigit = document.createElement("input");
        thirdDigit.setAttribute("id","num3");
        thirdDigit.setAttribute("type", "number");
        thirdDigit.setAttribute("max", "9");
        thirdDigit.setAttribute("min", "0");
        thirdDigit.setAttribute("oninput","validity.valid||(value='')");
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
    document.getElementById("top-image").src= "assets/images/store.jpg";

    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").setAttribute("class", "chapter");
    document.getElementById("story-area").innerHTML += "<h2>Chapter 2: Get the flowers!</h2><p>What a smooth ride, the summer evening scenery just flies by. Sixten’s bike is a true beauty. “I will put it back tomorrow, no one will notice, I’m not a criminal”<br>Now, off to the store to get some flowers and a snack.<br>Oh no! It’s that old cashier Greta, she’s been fooling Pete so many times. “Id better do some proper counting myself before lining up.”<br>So Pete's got a $50-bill. The flowers will be $<span id='flower'>0</span> and a piece of snack $<span id='snack'>0</span> and some pink chewing gum too at $<span id='gum'>0</span>.<br>How much will there be left?</p>";

    /** Randomized prizes */
    document.getElementById("flower").innerHTML = Math.floor(Math.random() *25) + 1;
    document.getElementById("snack").innerHTML = Math.floor(Math.random() *15) + 1;
    document.getElementById("gum").innerHTML = Math.floor(Math.random() *5) + 1;

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
        let flowerPrice = document.getElementById("flower").innerHTML;
        let snackPrice = document.getElementById("snack").innerHTML;
        let gumPrice = document.getElementById("gum").innerHTML;

        let sumUp = 50 - flowerPrice - snackPrice -gumPrice;

        let resultTwo = cashierGuess == sumUp;

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
 * Adds Chapter 2.2 Go Empty handed or not?
 */

function chapterTwoTwo(){
    document.getElementById("top-image").src= "assets/images/gift.jpg";
    
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML += "<h2>Chapter 2: Go empty handed or not?</h2><p>Ok, so we made it here somehow. Pete is standing on the sidewalk but with no present or any flowers. Going to the store is out of the question. He could go there empty handed and just explain or he could try to steal some flowers from a nearby garden. <br></p>";

    document.getElementById("game-area").innerHTML += "<h3>How's it gonna be?</h3>"
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
 * Adds Chapter 3 -Roll the dice
 */
function chapterThree() {
    document.getElementById("top-image").src= "assets/images/bobs_car.jpg";

    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";
    
    document.getElementById("story-area").innerHTML += "<h2>Chapter 3: Long arm of the law!</h2><p>“So glad that I am a math genius!”<br>But outside the store he can see police officer Bob hanging over Sixten’s bike. '-Did you get here on this?' he asks.<br>Pete tries to run but with Bob’s hand on his shoulder he just won’t get anywhere.<br>“-You know, we could forget this if you beat me at dice!” Bob suggests<br></p><br><h3>First one to 3 wins.</h3>";

    
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
        setTimeout(function() {
            partyThree();
        },2000);
    }
}

function bobResult(){
    document.getElementById("result-bob").innerHTML ++;
    
    if (document.getElementById("result-bob").innerText < 3) {
        console.log("continue")
    } else {
        setTimeout(function() {
            partyFour();
        },2000);
    }
}

/**
 * Final scenes depending on user choices
 */

function partyOne(){
    document.getElementById("top-image").src= "assets/images/score-hey.png";
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML += "<h2>Hey, you made it, but...</h2><br><p>Pete's not feeling as a winner though, he got there later than necessary, again depending on his mother and without any flowers.</p><br><h3>One last choice are you happy or not?</h3><br><p>There are other ways to do it...</p>";

    document.getElementById("game-area").innerHTML += "<h3>Your score: <strong>7</strong> out of 10</h3>";
    
    let tryAgain = document.createElement("input");
        tryAgain.setAttribute("id","try-again");
        tryAgain.setAttribute("type", "button");
        tryAgain.addEventListener("click", startOver);
        tryAgain.value ="I can do better!";
        document.getElementById("game-area").appendChild(tryAgain);

    function startOver(){
        location.href = "index.html";    
    }
}

function partyTwo(){
    document.getElementById("top-image").src= "assets/images/flying_pan.jpg";
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML += "<h2>Headache</h2><br><p>Pete sneakes into the garden and starts to search for the perfect color combination. He can't hear the old lady with her frying pan coming up behind him.<br>But he can almost hear the bang as the pan hit the back of his head... </p><br><h3>Why did you do this to Pete?</h3><br><p>Waking up on the sidewalk with a terrible pain Pete can see that the party has ended and starts to walk the long way home.</p>";

    document.getElementById("game-area").innerHTML += "<h3>Your score: <strong>3</strong> out of 10</h3>";

    let tryAgain = document.createElement("input");
    tryAgain.setAttribute("id","try-again");
    tryAgain.setAttribute("type", "button");
    tryAgain.addEventListener("click", startOver);
    tryAgain.value ="I can do better!";
    document.getElementById("game-area").appendChild(tryAgain);

    function startOver(){
        location.href = "index.html";    
    }
}

function partyThree(){
    document.getElementById("top-image").src= "assets/images/dancing.jpg";
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML +="<h2>You won, congratulations!</h2><br><p>You've made all the right turns, had some luck and guided Pete with excellence!<br>Now he is at the party dancing with his best friend!</p><br><h3>This adventure ends here</h3><br><p>This game has several storylines and you can always try another way. Thanks for playing!</p>"

    document.getElementById("game-area").innerHTML += "<h3>Your score: <strong>10</strong> out of 10</h3>";

    let tryAgain = document.createElement("input");
    tryAgain.setAttribute("id","try-again");
    tryAgain.setAttribute("type", "button");
    tryAgain.addEventListener("click", startOver);
    tryAgain.value ="Try another way";
    document.getElementById("game-area").appendChild(tryAgain);

    function startOver(){
        location.href = "index.html";    
    }
}

function partyFour(){
    document.getElementById("top-image").src= "assets/images/jail.jpg";
    
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML +="<h2>Pete has to follow Bob down to the station!</h2><br><p>You sure had some fun along the way, but Bob is such a master with the dice! This is the end of the road for this time.</p><br><br><h3>You have to practice and then try again</h3><br><p>Thanks for playing, try again and see if you can improve your score with other choices and challenges.</p><br"

    document.getElementById("game-area").innerHTML += "<h3>Your score: <strong>1</strong> out of 10</h3>";


    let tryAgain = document.createElement("input");
    tryAgain.setAttribute("id","try-again");
    tryAgain.setAttribute("type", "button");
    tryAgain.addEventListener("click", startOver);
    tryAgain.value ="I can do better!";
    document.getElementById("game-area").appendChild(tryAgain);

    function startOver(){
        location.href = "index.html";    
    }
}

function partyFive(){
    document.getElementById("top-image").src= "assets/images/times_up.jpg";
    document.getElementById("story-area").innerHTML ="";
    document.getElementById("game-area").innerHTML ="";

    document.getElementById("story-area").innerHTML +="<h2>Party has ended!</h2><br><p>While you were fooling around making the wrong turns the music stopped and everyone went home.</p><br><br><h3>Never give up!</h3><br><p>There are many ways to do this and just hit the button below and go for it again! Thanks for playing!</p>"

    document.getElementById("game-area").innerHTML += "<h3>Your score: <strong>2</strong> out of 10</h3>";

    let tryAgain = document.createElement("input");
    tryAgain.setAttribute("id","try-again");
    tryAgain.setAttribute("type", "button");
    tryAgain.addEventListener("click", startOver);
    tryAgain.value ="I can do better!";
    document.getElementById("game-area").appendChild(tryAgain);

    function startOver(){
        location.href = "index.html";    
    }
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