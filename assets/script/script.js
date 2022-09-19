let timeleft = 60;
let initialPoints=0;
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
startButton.addEventListener('click', timerBegin)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  //gives 15 each time
//   answerButtonsElement.addEventListener("click", scoreDisplay)

  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        
      button.dataset.correct = answer.correct;
    //   scoreDisplay = initialPoints +1 

    } 
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    if (solutionOne1|| solutionTwo2||solutionFour4||solutionThree3){
      console.log (scoreDisplay);
    }


  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
//    console.log(initialPoints++);
    setStatusClass(button, button.dataset.correct)

  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Quiz ended, click to Restart'
    document.getElementById("yourPoints").textContent = "your score is" + initialPoints;

    startButton.classList.remove('hide')
    //ending the quiz
   
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    initialPoints++;
  } else {
    element.classList.add('wrong')
    //decreases by 10 seconds 
    timeleft-=5;    
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}








const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]
solutionOne1 = questions[0].answers[0].correct
solutionTwo2 =questions[1].answers[0].correct
solutionThree3 = questions[2].answers[1].correct
solutionFour4 = questions[3].answers[1].correct


// questions[0].answers[0].correct
// questions[0].answers[1].correct

// questions[1].answers[0].correct
// questions[1].answers[1].correct
// questions[1].answers[2].correct
// questions[1].answers[3].correct

// questions[2].answers[0].correct
// questions[2].answers[1].correct
// questions[2].answers[2].correct
// questions[2].answers[3].correct

// questions[3].answers[0].correct
// questions[3].answers[1].correct

// console.log([questions].answers[0][correct]);

// console.log(questions[0].answers.correct);


// 60 second timer

function timerBegin(){
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
}
    
//initial score

function scoreDisplay(){
    initialPoints=initialPoints+1;
}


  