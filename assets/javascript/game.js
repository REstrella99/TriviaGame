$(document).ready(function() {
    
    
    function startScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start </a></p>";
        $(".mainArea").html(startScreen);
    }
    
    startScreen();
    

    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  
        generateHTML();
    
        timerWrapper();
    
    }); 
    
    $("body").on("click", ".answer", function(event){
   
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            
    
            clearInterval(theClock);
            generateWin();
        }
        else {
        
            clearInterval(theClock);
            generateLoss();
        }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        resetGame();
    });
    
    });  
    
    function generateLossDueToTimeOut() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='./assets/images/timesup.jpg'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000);  
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000);  
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Incorrect! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='./assets/images/wrong.jpg'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000); 
    }
    
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 6) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's your results!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Play Again!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateHTML();
        timerWrapper();
    }
    
    var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = ["What type of galaxy is the most common in the universe?","What is the coldest place in the universe?!", "How old is the universe in light years? ", "What is the smallest planet in our solar system?", "What is the largest type of star in the universe?", "What is the farthest distance from Earth a manned mission has traveled? ", "What flavor ice cream did Baskin-Robbins release in 1969 to commemorate America’s landing on the moon?"];
    var answerArray = [["Elliptical", "Irregular", "Milky Way", "Spiral"], ["Eagle Nebula" , "The Boomerang Nebula","Orion Nebula","Helix Nebula"], ["20.4 billion light-years", "14.8 billion light-years", "13.8 billion light-years", "11.6 billion light-years"], ["Jupiter","Earth","Mercury","Saturn"], ["Red Dwarf Stars", "Nuetron Stars", "White-Dwarf Stars", "Red Super-Giant Stars"], ["248,655 miles","250,655 miles","348,657 miles","100 miles"], ["Mint Chocolate","Lunar Cheesecake","Milky Way","Moon Fudge"]];
    var imageArray = ["<img class='img center-block img-right' src='./assets/images/elliptical.jpg'>", "<img class='img center-block img-right' src='./assets/images/boomerang.jpg'>", "<img class='img center-block img-right' src='./assets/images/correct.jpg'>", "<img class='img center-block img-right' src='./assets/images/mercury.jpg'>", "<img class='img center-block img-right' src='./assets/images/r.jpg'>", "<img class='img center-block img-right' src='./assets/images/correct.jpg'>", "<img class='img center-block img-right' src='./assets/images/lunar.jpg'>"];
    var correctAnswers = ["A. Elliptical", "B. The Boomerang Nebula", "C. 13.8 billion light-years", "C. Mercury", "D. Red Super-Giant Stars", "A. 248,655 miles", "B. Lunar Cheesecake"];
    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    
    
