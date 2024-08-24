# Getting Started

This repository functions as the basis of the quiz project in the [Browsers module](https://github.com/HackYourFuture/Browsers). Before the first group meeting, have a look through this code and try to understand how it works and how it is organised. We will explain the idea behind the structure below as well as the Backlog (which will identify what is needed to be implemented).

We have already implemented a very basic UI that can go through the questions to show you how this kind of code is split and how you can use the structure to your advantage. Have a look through it before your first group meeting as it can take a little while to get your head around it!

## Quiz-Application Features 
-  **Clickable Answers:** Answers are clickable, and the application provides feedback on selection.
-  **Next Question Button:** A button to proceed to the next question.
-  **Answer Feedback:** Clicking on an answer shows red for incorrect answers and green for correct answers.
-  **Results Page:** A results page that displays the outcome of the quiz.
-  **Timer:** A timer to track the time taken to complete the quiz.
-  **Progress Bar:** A progress bar to show the user’s progress through the 10 questions.
-  **Restart Quiz Button:** A button on the results page to restart the quiz.
-  **Animated Transitions:** Animations for transitioning between the welcome page and the start of the questions.


## Quiz-Application Screenshots
<img width="1509" alt="Ekran Resmi 2024-08-24 22 26 20" src="https://github.com/user-attachments/assets/4e025fb1-9b3c-4f07-be89-3b575055acbe">
<img width="1503" alt="Ekran Resmi 2024-08-24 22 26 35" src="https://github.com/user-attachments/assets/176e191e-9f8b-4990-9bff-58e24de786af">
<img width="1508" alt="Ekran Resmi 2024-08-24 22 26 55" src="https://github.com/user-attachments/assets/1de2afba-bdef-4373-8af5-03c2d49708a2">
<img width="1510" alt="Ekran Resmi 2024-08-24 22 27 07" src="https://github.com/user-attachments/assets/c5d833f3-7a3d-47f3-8a11-52843be7de52">
<img width="1512" alt="Ekran Resmi 2024-08-24 22 27 22" src="https://github.com/user-attachments/assets/5a354f4f-2e67-41d0-83db-a7dc4ab083a5">


## Development

To run this project locally you will need to open `index.html` in your browser using a local server. LiveServer, `http-server`, `study-lenses`, or any other local static server will work.

## Installing Dependencies

There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript. However, if you want to install prettier for this project then run (generally you always want to do this if you see a `package.json` file):

- `npm install`

# Structure

```
public
src
└── pages
└── views
└── app.js
└── constants.js
└── data.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
  - `pages` this folder contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
    it also contains our code that links up our handler code to the DOM.
  - `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the pages do.
  - `app.js` this file our initialisation code. Generally this code should only run once and starts the application
  - `data.js` this is our data model. Anything we need to store in the browser we place inside the data file
