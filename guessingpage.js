const questions = [

    {
        flag: "flags/China.png",
        correctAnswer:"China",
        options: ["China", "The USSR"]
    
    },

    {
        flag: "flags/Argentina.png",
        correctAnswer: "Argentina",
        options: ["Argentina", "Uruguay"]
    },

    {
        flag: "flags/Australia.png",
        correctAnswer: "Australia",
        options: ["New Zealand", "Australia"]
    },

    {
        flag: "flags/Belarus.png",
        correctAnswer: "Belarus",
        options: ["Russian Federation", "Belarus"]
    },

    {
        flag: "flags/France.png",
        correctAnswer: "France",
        options: ["France", "Ivory Coast"]
    },

    {
        flag: "flags/Germany.png",
        correctAnswer: "Germany",
        options: ["Germany", "UAE"]
    },

    {
        flag: "flags/India.png",
        correctAnswer: "India",
        options: ["Niger", "India"]
    },

    {
        flag: "flags/Mauritius.png",
        correctAnswer: "Mauritius",
        options: ["Mauritius", "Seychelles"]
    },

    {
        flag: "flags/Netherlands.png",
        correctAnswer: "Netherlands",
        options: ["Russian Federation", "Netherlands"]
    },

    {
        flag: "flags/Palestine.png",
        correctAnswer: "Palestine",
        options: ["Palestine", "Jordan"]
    },
]

let currentQuestion = 0;
let score = 0;
let questionAnswered = false;

const flagImage = document.getElementById("flagimage");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const feedback = document.getElementById("feedback");

function loadQuestion() {
    
    const question = questions[currentQuestion];

    flagImage.src = question.flag;

    option1.textContent = question.options[0];
    option2.textContent = question.options[1];

}

function checkAnswer(selectedAnswer) {

    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    const question = questions[currentQuestion];

    if (selectedAnswer === question.correctAnswer) {
        score++;
        feedback.textContent = "Correct!"
    }

    else {
        feedback.textContent = "Wrong :<"
    }

    setTimeout(nextQuestion, 1000);

}

function nextQuestion () {

    currentQuestion++;

    questionAnswered = false;
    feedback.textContent = "";
    loadQuestion();
}

option1.addEventListener("click", function() {
    checkAnswer(option1.textContent);
});

option2.addEventListener("click", function() {
    checkAnswer(option2.textContent);
});

loadQuestion();

