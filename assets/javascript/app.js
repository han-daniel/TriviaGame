let userPick = [];
let correctAnswers = 0;
let wrongAnswers = 0;
let missedAnswers = 0;
let timeDisplay;
let counter = 60;
let intervalID;
let questions = [{
    question: "How many breeds of dog are there worldwide?",
    choices: ["1600", "800", "200", "400"],
    answer: 3
},
{
    question: "What dog is known for its bluish-black tongue?",
    choices: ["Chow Chow", "Lhasa Apso", "Afghan Hound", "American Bulldog"],
    answer: 0
},
{
    question: "What is the largest breed of dog?",
    choices: ["St. Bernard", "Irish Wolfhound", "Great Dane", "English Mastiff"],
    answer: 1
},
{
    question: "What breed of dog was originated in the late 1800s by Captain Max von Stephanitz who hoped to develop an all-purpose working dog?",
    choices: ["Border Collie", "St. Bernard", "German Spitz", "German Shepherd"],
    answer: 3
},
{
    question: "What is the fastest breed of dog?",
    choices: ["Swedish Vallhund", "German Spitz", "Harrier", "Greyhound"],
    answer: 3
},
{
    question: "What is the only dog that can't bark?",
    choices: ["Whippet", "Borzoi", "Basenji", "Saluki"],
    answer: 2
},
{
    question: "What is the most popular dog in the United States?",
    choices: ["Beagle", "Labrador Retriever", "German Shepherd", "Poodle"],
    answer: 1
},
{
    question: "What breed of dog was originated in Germany by a tax collector who needed a guard dog for protection?",
    choices: ["Pit Bull", "Rottweiler", "Great Dane", "Dobermann"],
    answer: 3
},
{
    question: "What breed of dog has the longest ears?",
    choices: ["Basset Hound", "Polish Hound", "Shih Tzu", "Siberian Husky"],
    answer: 0
},
{
    question: "All dogs are generally believed to be descended from what prehistoric animal?",
    choices: ["Thylacosmilus", "Proailurus", "Thylacoleonidae", "Tomarctus"],
    answer: 3
},
{
    question: "What is the smallest dog breed?",
    choices: ["Chihuahua", "Dachshund", "Pomeranian", "Jack Russell Terrier"],
    answer: 0
},
{
    question: "What does 'Corgi' mean in Welsh?",
    choices: ["Always Yapping", "Furry Sausage", "Dwarf Dog", "Blind Shepherd"],
    answer: 2
},
{
    question: "What breed of dog has webbed feet?",
    choices: ["Great Dane", "Newfoundland", "German Shepherd", "Cocker Spaniel"],
    answer: 1
},
{
    question: "A dog's sense of smell is how much better than a human's?",
    choices: ["10 X", "100 X", "1,000 X", "10,000 X"],
    answer: 3
}
];
for (var i = 0; i < questions.length; i++) {
    userPick[i] = null;
}
$(document).ready(function () {

    $("#startGame").click(function () {
        intervalID = setInterval(decrement, 1000);
        writeQuestions();
        $("#startGame").hide();
        writeSubmitButton();

        $("#submitQuiz").click(function () {
            showResults();
        });
        $("input").click(function () {
            userPick[this.name] = this.value;
        });
    });
});

function writeQuestions() {
    for (var i = 0; i < questions.length; i++) {
        $("#formQuiz").append(questions[i].question + "</br>");
        for (var x = 0; x < questions[i].choices.length; x++) {
            $("#formQuiz").append("<label class='radio-inline'><input value='" + x + 
            "' type='radio' name='" + i + "'>" + questions[i].choices[x] + "</label>");
        }
        $("#formQuiz").append("<br/><br/>");
    }
}
function writeSubmitButton() {
    $("#formSubmit").append("<button id='submitQuiz' class='btn btn-primary btn-lg'>Finish</button>");
}

function decrement() {
    counter--;
    $("#timeRemaining").html("<h2><mark>" + counter + " seconds remaining.</mark></h2>");
    if (counter === 0) {
        showResults();
    }
}
function showResults() {
    $("#formQuiz").hide();
    $("#timeRemaining").hide();
    $("#submitQuiz").hide();
    for (i = 0; i < questions.length; i++) {
        if (questions[i].answer == userPick[i]) {
            correctAnswers++;
        }
        else if (userPick[i] === null) {
            missedAnswers++;
        }
        else {
            wrongAnswers++;
        }
    }
    let qR = $("#quizResults");
    $(qR).append("<p>Your Results</p>");
    $(qR).append("<p>Correct Answers - " + correctAnswers + "</p>");
    $(qR).append("<p>Incorrect Answers - " + wrongAnswers + "</p>");
    $(qR).append("<p>Missed Questions - " + missedAnswers + "</p>");
    clearInterval(intervalID);
}

