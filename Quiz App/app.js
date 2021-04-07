
var Questions = [
    {
        question: "The correct sequence of HTML tags for starting a webpage is:",
        options: ["Head, Title, HTML, body", "HTML, Body, Title, Head", "HTML, Head, Title, Body", "HTML, Head, Title, Body"],
        correctOption: "HTML, Head, Title, Body"
    },
    {
        question: "HTML stands for:",
        options: ["HighText Machine Language", "HyperText and links Markup Language", "HyperText Markup Language", "None of these"],
        correctOption: "HyperText Markup Language"
    },
    {
        question: "Is JavaScript a case-sensitive language?",
        options: ["true", "false"],
        correctOption: "true"
    }
]

var questionIndx = 0;
var score = 0;
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var submitBtn = document.getElementById("submitBtn");
var timer = document.getElementById("timer");
var timeLeft = 30;
// var name = prompt("Enter your name to start quiz");

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        timer.innerHTML = timeLeft + 'sec';
        timeLeft--;
        // console.log(timeLeft)
        // if (timeLeft == 0) {
            
        //     displayQuestion()
        // }
    }
}
var timerId = setInterval(countdown, 1000);


function displayQuestion() {
    var questionCompleted = document.getElementById("questionCompleted");
    questionCompleted.innerHTML = questionIndx + 1;
    var totalQuestions = document.getElementById("totalQuestions");
    totalQuestions.innerHTML = Questions.length;
    var dispQuestion = document.getElementById("question");
    dispQuestion.innerHTML = Questions[questionIndx].question;
    var optionDiv = document.getElementById("optionsParent");
    optionDiv.innerHTML = "";
    for (var i = 0; i < Questions[questionIndx].options.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "col-md-6 p-3");
        var optionBTN = document.createElement("button");
        optionBTN.setAttribute("class", "customBtn")
        optionBTN.setAttribute("onclick", "activeClass(this)")
        var optionBtnText = document.createTextNode(Questions[questionIndx].options[i]);
        optionBTN.appendChild(optionBtnText);
        div.appendChild(optionBTN);
        optionDiv.appendChild(div);
    }
    if (questionIndx == 0) {
        submitBtn.style.display = 'none';
        prevBtn.style.display = 'none'
    }
    countdown();
}

// console.log(timer)

// if(timer.innerHTML == 0){
//     displayQuestion();
// }

function nextQuestion() {
    timeLeft = 30;
    if (questionIndx !== Questions.length - 1) {
        prevBtn.style.display = 'block'
        nextBtn.style.display = 'block'
        submitBtn.style.display = 'none';
        questionIndx++;
        displayQuestion();
    }
    var questionsCompleted = document.getElementById("questionCompleted");
    var totalQuestions = document.getElementById("totalQuestions");
    if (questionsCompleted.innerHTML === totalQuestions.innerHTML) {
        nextBtn.style.display = 'none'
        prevBtn.style.display = 'none'
        submitBtn.style.display = 'block';
    }
    // var active = document.getElementsByClassName("active");
    // console.log(active[0]);
}

function prevQuestion() {
    if (questionIndx !== 0) {
        questionIndx--;
        timeLeft = 30;
        displayQuestion();
    }
}

function activeClass(e) {
    removeActiveClass();
    e.classList.add("active");
}

function removeActiveClass() {
    var active = document.getElementsByClassName("active");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active");
    }
}

function submit() {
    
}











