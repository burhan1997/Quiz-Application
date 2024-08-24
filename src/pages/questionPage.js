import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initEndPage } from './endPage.js'; //importing initEndPage

let videoLoaded = false;

//= pick random question
const randomizeQuestions = (qArray) => {
  for (let i = 0; i < qArray.length - 1; i++) {
    const x = Math.floor(Math.random() * (i + 1));
    [qArray[i], qArray[x]] = [qArray[x], qArray[i]]; //swap it
  }
};

export const initQuestionPage = () => {
  if (document.body.style.backgroundImage) {
    document.body.style.backgroundImage = 'none';
  }

  randomizeQuestions(quizData.questions);

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  gsap.from(questionElement, {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power4.out',
  });

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  let selectedAnswer = null; // Added variable to store the selected answer
  let myImg1 = document.querySelector('.img-1');
  let myImg2 = document.querySelector('.img-2');

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    //=========================
    //add attr to answerElement (ul-li)
    answerElement.setAttribute('data-answer', key);

    gsap.from(answerElement, {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: 'power4.out',
    });

    //Add an eventListener here for checking the answers

    answersListElement.addEventListener('click', (e) => {
      if (selectedAnswer === null) {
        const clickedAnswer = e.target.getAttribute('data-answer'); //a b c d
        const index = Array.from(answersListElement.children).indexOf(e.target); //0 1 2 3

        //The error you're encountering indicates that the answersListElement.children[index] is returning undefined at some point. This could happen if the index value is not within the valid range of children elements in your answersListElement.
        if (index !== -1) {
          if (clickedAnswer === currentQuestion.correct) {
            quizData.correctAnswersCount++;
            myImg1.src =
              'https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif';
            myImg1.style.display = 'block';
            myImg2.src =
              'https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif';
            myImg2.style.display = 'block';
            answersListElement.children[index].style.boxShadow =
              '0 0 10px 10px #00FF00';
            answersListElement.children[index].style.transition = 'none';
          } else {
            answersListElement.children[index].style.boxShadow =
              '0 0 10px 10px #FF0000';

            const correctAnswer = document.querySelector(
              `[data-answer="${currentQuestion.correct}"]`
            );

            if (correctAnswer) {
              correctAnswer.style.boxShadow = '0 0 10px 10px #00FF00';
            }
          }

          disableClick();
          selectedAnswer = clickedAnswer;
        }
      }
    });

    //========================
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  vidBackground();
  createProgressBar();

  clearInterval(countDown);

  // Start the timer with a duration of 5 seconds
  quizTimer(15, currentQuestion);
};

//==============
const disableClick = () => {
  const liElements = document.querySelectorAll(`#${ANSWERS_LIST_ID}`); //answersListElement
  for (let el of liElements) {
    el.style.pointerEvents = 'none';
  }
};
//=============

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1; // moving to the next question

  if (quizData.currentQuestionIndex < quizData.questions.length) {
    initQuestionPage();
  } else {
    // If there are no more questions, quiz is completed, go to the end page
    quizData.quizCompleted = true;
    initEndPage(); // calls the initEndPage function and displaying a congratulations message
  }

  incrementProgressBar();
};

//Add a video background
const vidBackground = () => {
  if (!videoLoaded) {
    //<video autoplay loop>
    //<source src=.. type=..> </vid>
    const videoBG = document.createElement('video'); //<video>
    videoBG.setAttribute('autoplay', true);
    videoBG.setAttribute('loop', true);

    const vidSource = document.createElement('source');
    vidSource.setAttribute(
      'src',
      'https://res.cloudinary.com/dm4vls99s/video/upload/v1702931258/neon-light_lmioon.mp4'
    );
    vidSource.setAttribute('type', 'video/mp4');

    //===to remove default controls when we open from phone
    if ('playsInline' in videoBG) {
      videoBG.playsInline = true;
    } else {
      videoBG.setAttribute('playsnline', '');
    }
    ///
    videoBG.appendChild(vidSource);
    document.body.appendChild(videoBG);
    videoLoaded = true;
  }
};

let progress;
let currentWidth = 0;

const createProgressBar = () => {
  //<div id ='containerBar'><div id='progress'></div></div>
  const container = document.createElement('div');
  container.setAttribute('id', 'containerBar');

  progress = document.createElement('div');
  progress.setAttribute('id', 'progress');
  progress.style.width = '0%';

  document.body.appendChild(container);
  container.appendChild(progress);
};

const incrementProgressBar = () => {
  if (currentWidth < 100) {
    currentWidth += 100 / quizData.questions.length;
    progress.style.width = `${currentWidth}%`;
  }
};

let myTimer = document.querySelector('.time');
let countDown;

function quizTimer(duration, count) {
  let minutes;
  let seconds;
  countDown = setInterval(function () {
    minutes = parseInt(duration / 60);
    seconds = parseInt(duration % 60);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    myTimer.innerHTML = `${minutes}:${seconds}`;
    document.querySelector('.quiz-timer').style.display = 'block';

    if (--duration < 0) {
      clearInterval(countDown);
      nextQuestion();
    }
  }, 1000);
}

export const stopTimer = () => {
  clearInterval(countDown);
  document.querySelector('.quiz-timer').style.display = 'none';
};
