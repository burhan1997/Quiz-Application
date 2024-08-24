import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initEndPage } from './pages/endPage.js'; // Imports the initEndPage function

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  quizData.quizCompleted = false; //quiz starts from the beginning and is not completed when the application loads.
  //
  // Checking that if the quiz is completed
  if (quizData.quizCompleted) {
    initEndPage();
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
