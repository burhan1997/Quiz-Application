# Getting Started

This repository functions as the basis of the quiz project in the [Browsers module](https://github.com/HackYourFuture/Browsers). Before the first group meeting, have a look through this code and try to understand how it works and how it is organised. We will explain the idea behind the structure below as well as the Backlog (which will identify what is needed to be implemented).

We have already implemented a very basic UI that can go through the questions to show you how this kind of code is split and how you can use the structure to your advantage. Have a look through it before your first group meeting as it can take a little while to get your head around it!

## Application Screenshots
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

Instead of writing all code in a single JavaScript file, we want you to split your code over several files.
The structure of this project is explained in the next video

[![Project Structure YouTube Video](https://i.imgur.com/hDcLYFt.png)](https://youtu.be/bysBqtSKBpQ)

Let's run through the folders:

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

# Goal and Backlog

So what should be built? Below is a collection of user stories you can choose from. Stories inside of each priority level are not necessarily in order, it's up to your group to decide how they fit into your strategy. These are also just suggestion, feel free to change them or create your own! Feel free to get creative.

Choose a desired end result at the start of the project.
By choosing an existing example, the goal of the project will be clear to everyone in the team.
Another benefit is that it will be easier to come up with the necessary tasks to create your quiz.

Some examples of online quizes that you might like:

- https://wwbm.com/
- https://www.typeform.com/templates/t/trivia/
- https://lovattspuzzles.com/online-puzzles-competitions/ultimate-online-trivia-quiz/
- https://www.lenstore.co.uk/vc/colour-is-in-the-eye-of-the-beholder/#/game
- https://heywise.com/quiz/lets-find-out-if-you-follow-gordon-ramsay/1/

When you have chosen your goal, you can create tasks as issues on Github and assign them to team members.
Tasks could look like this, using the [MoSCoW](https://en.wikipedia.org/wiki/MoSCoW_method) labels for prioritization

- [ ] (must have) Answer is clickable
- [ ] (must have) Next question button takes you to the next question
- [ ] (must have) If you click on an answer, it shows red for incorrect, green for correct
- [ ] (must have) Results page
- [ ] (should have) Timer for completing quiz
- [ ] (should have) Progress bar through the 10 questions
- [ ] (should have) A user can refresh the page and still have his/her given answers available
- [ ] (shold have) Restart quiz button, on the results page
- [ ] (could have) Animate transition between welcome page and start of questions


You should create tasks that fit with your goal, these tasks serve just as an example.
