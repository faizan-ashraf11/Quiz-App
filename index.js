let listenView = document.getElementById("viewHistory");
let startQuiz = document.getElementById("startQuiz");
hideHistory();
hideQuiz();
listenView.addEventListener("click" , ()=>{
    this.displayHistory();
    this.hideQuizButton();
    this.hideHistoryButton();
})
startQuiz.addEventListener("click" , ()=>{
    this.displayQuiz();
    this.hideQuizButton();
    this.hideHistoryButton();
})
function displayHistory(){
    let viewing = document.getElementById("history");
    viewing.style.display = "flex";
    this.displayScores();
}
function displayQuiz(){
    let quiz = document.getElementById("Quiz");
    quiz.style.display = "flex";
}
function hideHistory(){
    let viewing = document.getElementById("history");
    viewing.style.display = "none";
}
function hideQuiz(){
    let quiz = document.getElementById("Quiz");
    quiz.style.display = "none";
}
function hideQuizButton(){
    this.startQuiz.style.display = "none";
    this.hideTopMargin("0px");
}
function hideHistoryButton(){
    let view = document.getElementById("viewHistory");
    view.style.display = "none";
    this.hideTopMargin("0px");
}
function showQuizButton(){
    this.startQuiz.style.display = "flex";
    this.hideTopMargin("200px");
}
function showHistoryButton(){
    let view = document.getElementById("viewHistory");
    view.style.display = "flex";
    this.hideTopMargin("200px");
}
function hideTopMargin(margin){
    let TopMargin = document.getElementById("TopMargin");
    TopMargin.style.marginTop = margin;
}


let backButtonHistory1 = document.getElementById("backButtonHistory1");
backButtonHistory1.addEventListener("click" , ()=>{
    this.hideHistory();
    this.showHistoryButton();
    this.showQuizButton();
})

let backButtonHistory2 = document.getElementById("backButtonHistory2");
backButtonHistory2.addEventListener("click" , ()=>{
    this.hideLose();
    this.hideWin();
    this.hideQuiz();
    this.showHistoryButton();
    this.showQuizButton();
    this.uncheckRadioButtons();
})


// Quiz Submission

var currentScore = 0;
let sumbitQuiz = document.getElementById("submitQuiz");
sumbitQuiz.addEventListener("click" , ()=>{
    this.currentScore = 0;
    var answer1 = document.querySelector('input[name="Q1"]:checked')?.value;
    if(answer1 == 'A'){
        this.currentScore += 10;
    }
    var answer2 = document.querySelector('input[name="Q2"]:checked')?.value;
    if(answer2 == 'C'){
        this.currentScore += 10;
    }
    var answer3 = document.querySelector('input[name="Q3"]:checked')?.value;
    if(answer3 == 'B'){
        this.currentScore += 10;
    }
    var answer4 = document.querySelector('input[name="Q4"]:checked')?.value;
    if(answer4 == 'A'){
        this.currentScore += 10;
    }
    var answer5 = document.querySelector('input[name="Q5"]:checked')?.value;
    if(answer5 == 'C'){
        this.currentScore += 10;
    }
    var answer6 = document.querySelector('input[name="Q6"]:checked')?.value;
    if(answer6 == 'A'){
        this.currentScore += 10;
    }
    var answer7 = document.querySelector('input[name="Q7"]:checked')?.value;
    if(answer7 == 'D'){
        this.currentScore += 10;
    }
    var answer8 = document.querySelector('input[name="Q8"]:checked')?.value;
    if(answer8 == 'D'){
        this.currentScore += 10;
    }
    var answer9 = document.querySelector('input[name="Q9"]:checked')?.value;
    if(answer9 == 'B'){
        this.currentScore += 10;
    }
    var answer10 = document.querySelector('input[name="Q10"]:checked')?.value;
    if(answer10 == 'C'){
        this.currentScore += 10;
    }
    this.scores.push(this.currentScore);
    this.uncheckRadioButtons();
    if(this.currentScore >= 40){
        this.displayWin();
    }
    if(this.currentScore < 40){
        this.displayLose();
    }
})


// Score Data

var scores = [];

let UlScroreList = document.getElementById("UlScroreList");

var ind = 0;
function displayScores(){
    this.scores.forEach((element , index) => {
        if(ind<=index){
            var li = document.createElement("li");
            li.textContent = element;
            UlScroreList.appendChild(li);
            ind++;
        }
    });
}


// uncheckRadioButtons

function uncheckRadioButtons() {
    // Loop through each question and uncheck its radio buttons
    for (let i = 1; i <= 10; i++) {
      var radioButtons = document.getElementsByName("Q" + i);
      radioButtons.forEach(function (radioButton) {
        radioButton.checked = false;
      });
    }
  }

// You Win and You Lose

this.hideWin();
this.hideLose();
function displayWin(){
    let win = document.getElementById("YouWin");
    win.style.display = "flex";
}
function hideWin(){
    let win = document.getElementById("YouWin");
    win.style.display = "none";
}
function displayLose(){
    let lose = document.getElementById("YouLose");
    lose.style.display = "flex";
}
function hideLose(){
    let lose = document.getElementById("YouLose");
    lose.style.display = "none";
}