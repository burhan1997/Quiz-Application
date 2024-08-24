import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */

export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  //Added id in h1
  element.innerHTML = String.raw` 
    <h1 id='questionHeader'>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}"> 
    </ul>  

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <div class = "img-div">
    <img src="" class = "img-1">
    <img src="" class = "img-2">
    </div>
  `;

  return element;
};
