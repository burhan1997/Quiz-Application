import { initWelcomePage } from "../pages/welcomePage.js";

export const createEndElement = () => { 
  //Create a new HTML div element and with innerHTML set the congrats message and restart button
  const element = document.createElement('div');
  element.className = "end-cont"
  element.innerHTML = `
  <h1>Congratulations! You've completed the quiz!</h1>

<div class="count-div">
  <div class="count1">
    <div class="number1">${quizData.correctAnswersCount}</div>
  </div>
  <p>Correct Answers From</p>
  <div class="count2">
    <div class="number2">${quizData.questions.length}</div>
  </div>
</div>

  <p>Thank you for participating.</p>

  <!-- Add an id to the restart button -->
    <button id="restart-quiz-button">Restart Quiz</button>
`;

const restartButton = element.querySelector('#restart-quiz-button');
  if (restartButton) {
    restartButton.addEventListener('click', () => {
    // Resetting quiz data
    // quizData.currentQuestionIndex = 0;
    //quizData.quizCompleted = false;
    //quizData.userScore = 0; // Reset userScore to 0   
      

      console.log('Restarting the quiz...');
      
    // Navigate back to the welcome page
    //initWelcomePage();
    location.reload();
    });
  }
  return element;
};