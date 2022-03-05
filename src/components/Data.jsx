// Page for the react questions and answers 

const data = [
    {
      id: 1,
      question: "What is a JSX?",
      answers: [
        {
          text: "JSX is a well known food company.",
          correct: false,
        },
        {
        text: "JSX stands for JavaScript XML and allows us to write HTML in React.",
        correct: true, 
        },
        {
          text: "JSX is a car firm founded in Argentina.",
          correct: false,
        },
        {
          text: "JSX stands for Jobs Safety & X-factor",
          correct: false, 
        }
      ]
    },
    {
      id: 2,
      question: "What is the vitual DOM?",
      answers: [
        {
          text: "The virtual DOM is an in-memory representation of the real DOM elements generated by React components before any changes are made to the page.",
          correct: true,
        },
        {
        text: "DOM is a control flow statement for specifying iteration, which allows code to be executed repeatedly",
        correct: false, 
        },
        {
          text: "DOM is a the main character is fast and furious",
          correct: false,
        },
        {
          text: "DOM is short for Dominos Pizza",
          correct: false, 
        }
      ]
    },
    {
      id: 3,
      question: "What is a component in React?",
      answers: [
        {
          text: "a part of element of a larger whole",
          correct: false,
        },
        {
        text: "Components are conditional statements",
        correct: false, 
        },
        {
          text: "Components creates a new array from calling a function for every array element",
          correct: false,
        },
        {
          text: "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML",
          correct: true, 
        }
      ]
    },
    {
        id: 4,
        question: "Why can't browsers read JSX?",
        answers: [
          {
            text: "JSX is not valid JavaScript. Browsers can only read JavaScript objects",
            correct: true,
          },
          {
          text: "Browsers are not smart enough to read JSX",
          correct: false, 
          },
          {
            text: "JSX can be read by browsers.",
            correct: false,
          },
          {
            text: "JSX is valid JavaScript. Babel is not needed to do the compiling.",
            correct: false, 
          }
        ]
      },
      {
        id: 5,
        question: "How can you embed two or more components into one?",
        answers: [
          {
            text: "Change the component to a JSX file to embed it.",
            correct: false,
          },
          {
          text: "React does not allow embedding components together.",
          correct: false, 
          },
          {
            text: "In React, you can embed another or mulitple components by calling it inside of a component's return statement.",
            correct: true,
          },
          {
            text: "Call the component before the return statement.",
            correct: false, 
          }
        ]
      },
      {
        id: 6,
        question: "What are Props?",
        answers: [
          {
            text: "Props are conditional statements.",
            correct: false,
          },
          {
          text: "Props are React Components.",
          correct: false, 
          },
          {
            text: "Props are arguments passed into React components and are passed down similar to HTML attributes. Props are read-only and can be JavaScript expressions, string literals, callback functions, and other components",
            correct: true,
          },
          {
            text: "Props are congratulating someone or appreciating them for their skill or talent.",
            correct: false, 
          }
        ]
      }
  ]