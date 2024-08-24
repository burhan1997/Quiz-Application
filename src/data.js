/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
    currentQuestionIndex: 0,
    correctAnswersCount: 0,
    quizCompleted: false, //quizCompleted property defined here. I put false, because if the application starts it should be false

    // the questions in the quiz
    questions: [
        {
            text: 'What are the different ways to declare a JS variable?',
            answers: {

                A: 'constant, let, variable',
                B: 'var, const, let, function',
                C: 'var, let, const',
                D: 'const, let, variable',

            },
            correct: 'C',
            selected: null,
            links: [
                {
                    text: 'javascript.info',
                    href: 'https://javascript.info/variables',
                },
                {
                    text: 'Tyler McGinnis',
                    href: 'https://ui.dev/var-let-const/',
                },
            ],
        },
        {
            text: 'What does `typeof` do?',
            answers: {

                A: 'Changes the type of a primitive value',
                B: 'Returns a string describing the type of a value',
                C: 'Determines if a value is primitive',
                D: 'Can tell the difference between arrays and objects',
            },
            correct: 'D',

            selected: null,
            links: [
                {
                    text: 'javascript.info',
                    href: 'https://javascript.info/types#type-typeof',
                },
                {
                    text: 'MDN',
                    href:
                        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
                },
            ],
        },
        {
            text: 'Which HTML attribute is used to define inline styles?',
            answers: {
                A: 'font',
                B: 'class',
                C: 'style',
                D: 'css',
            },
            correct: 'C',
            selected: null,
            links: [
                {
                    text: 'javascript.info',
                    href: 'https://www.codecademy.com/article/html-inline-styles',
                },
                {
                    text: 'MDN',
                    href:
                        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style',
                },
            ],
        },
        {
            text: 'What does CSS stand for?',
            answers: {
                A: 'Computer Style Sheets',
                B: 'Colorful Style Sheets',
                C: 'Creative Style Sheets',
                D: 'Cascading Style Sheets',
            },
            correct: 'D',
            selected: null,
            links: [
                {
                    text: 'Css.info',
                    href: 'https://www.codecademy.com/learn/learn-css',
                },
                {
                    text: 'MDN',
                    href:
                        'https://developer.mozilla.org/en-US/docs/Web/CSS',
                },
            ],
        },
        {
            text: 'Who is making the Web standards?',
            answers: {
                A: 'W3C',
                B: 'Microsoft',
                C: 'Google',
                D: 'Mozilla',
            },
            correct: 'A',
            selected: null,
            links: [
                {
                    text: 'W3C.info',
                    href: 'https://www.w3.org',
                },
                {
                    text: 'MDN',
                    href:
                        'https://developer.mozilla.org/en-US/docs/Glossary/W3C',
                },
            ],
        },
        {
            text: 'JavaScript is ______ Side Scripting Language.',
            answers: {
                A: 'Server',
                B: 'ISP',
                C: 'Browser',
                D: 'None of These',
            },
            correct: 'C',
            selected: null,
            links: [
                {
                    text: 'JavaScript.info',
                    href: 'https://www.codecademy.com/article/what-is-javascript',
                },
                {
                    text: 'MDN',
                    href:
                        'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                },
            ],
        },
        {
            text: 'The property in CSS used to change the background color of an element is?',
            answers: {
                A: 'bgcolor',
                B: 'colo',
                C: 'background-color',
                D: 'All of the above',
            },
            correct: 'C',
            selected: null,
            links: [
                {
                    text: 'CSS.info',
                    href: 'https://www.codecademy.com/resources/docs/css/background/background-color',
                },
                {
                    text: 'MDN',
                    href:
                        'https://developer.mozilla.org/en-US/docs/Web/CSS/background-color ',
                },
            ],
        },
        {
            text: 'The CSS property used to control the elements font size is?',
            answers: {
                A: 'text-style',
                B: 'font-size',
                C: 'text-size',
                D: 'font-style',
            },

            correct: 'D',

            selected: null,
            links: [
                {
                    text: 'CSS.info',
                    href: 'https://www.codecademy.com/resources/docs/css/typography/font-size',
                },
                {
                    text: 'MDN',
                    href:
                        'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size',
                },
            ],
        },
        {
            text: 'Which selector is used to specify a style for one unique element?',
            answers: {
                A: 'id',
                B: 'text',
                C: 'attribute',
                D: 'class',
            },
            correct: 'A',
            selected: null,
            links: [
                {
                    text: 'CSS.info',
                    href: 'https://www.codecademy.com/resources/docs/html/attributes/id',
                },
                {
                    text: 'MDN',
                    href:
                        'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id',
                },
            ],
        },
        {
            text: 'Are the negative values allowed in padding property?',
            answers: {
                A: 'Yes',
                B: 'No',
                C: 'It depends on HTM',
                D: 'None of the above',
            },

            correct: 'D',

            selected: null,
            links: [
                {
                    text: 'CSS.info',
                    href: 'https://www.codecademy.com/resources/docs/css/comments',
                },
                {
                    text: 'MDN',
                    href:
                        'https://developer.mozilla.org/en-US/docs/Web/CSS',
                },
            ],
        },
        // Add more questions here
    ],
};

globalThis.quizData = quizData;
