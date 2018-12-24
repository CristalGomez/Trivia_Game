$(document).ready(function () {

    var correctAnswers = 0;
    $("#correct").html("Correct: " + correctAnswers)
    var incorrectAnswers = 0;
    $("#incorrect").html("Incorrect: " + incorrectAnswers)
    var unanswered = 0;
    $("#unanswered").html("Unanswered: " + unanswered)
    var answered = 0;
    var number = 61;
    var intervalId;
    var totalQuestions = 5;

    //wrapping these functions in a for loop will stop the clock at 0
    for (var i = 0; i < number; i++) {
        function startGame() {
            clearInterval(intervalId);
            intervalId = setInterval(countDown, 1000);
            answered = correctAnswers + incorrectAnswers;
        }
        //this is how I'm keeping score of the answered questions
        // answered questions will not be displayed to the user
        //If the user answered all 5 of the questions, the game will swtich to the endGame function
        function answeredQuestions() {
            answered = correctAnswers + incorrectAnswers;
            if (answered === 5) {
                endGame();
                //changeScreen();
            }
        }
        //this function is what is making the var number go down by 1 every second
        function countDown() {
            number--;
            $("#timer").html("Seconds Remaining: " + number);
            if (number === 0) {
                endGame();
                //changeScreen();
            }
        }

    // Here I would put a function that changes the screen to the Game Over screen when the timer reaches 0
    // function changeScreen(){
        // if (number === 0){
        // call for the results.html page
        // }
    // }

    //This function determines what happens when the timer reaches 0
        function endGame() {
            if (number === 0) {
                unanswered = totalQuestions - answered;
                clearInterval(intervalId);
                //changeScreen();
            }
        }
        startGame();
    };

// these are the functions to keep score of how many correct/incorrect answers were chosen
    function correctPoint() {
        correctAnswers++;
        $("#correct").html("Correct: " + correctAnswers)
    };

    function wrongPoint() {
        incorrectAnswers++;
        $("#incorrect").html("Incorrect: " + incorrectAnswers)
    }
// end

// This is to check if the radio was clicked
//I classified the radios using their values in order to call them by that
//By classifying them as correct/wrong this would save me from having to do this for every question
// the radioChecked function is what determines 
        $("input[value=correct]").on("click", correctPoint());
        $("input[value=wrong]").on("click", wrongPoint());
        // I am trying to call them the say way I call a regular button


});