import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createEndElement } from '../views/endView.js';
import { initWelcomePage } from './welcomePage.js';
import { stopTimer } from './questionPage.js';
import { quizData } from '../data.js';

export const initEndPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  //restartQuiz function as a callback to createEndElement
  const endElement = createEndElement();
  userInterface.appendChild(endElement);

  // Call stopTimer to make the timer stopped on the end page
  stopTimer();
};
