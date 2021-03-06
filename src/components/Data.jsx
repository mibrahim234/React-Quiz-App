 // Page for the react questions and answers 

// const data = [
//     {
//       id: 1,
//       question: "What is a JSX?",
//       answers: [
//         {
//           text: "JSX is a well known food company.",
//           correct: false,
//         },
//         {
//         text: "JSX stands for JavaScript XML and allows us to write HTML in React.",
//         correct: true, 
//         },
//         {
//           text: "JSX is a car firm founded in Argentina.",
//           correct: false,
//         },
//         {
//           text: "JSX stands for Jobs Safety & X-factor",
//           correct: false, 
//         }
//       ]
//     },
//     {
//       id: 2,
//       question: "What is the vitual DOM?",
//       answers: [
//         {
//           text: "The virtual DOM is an in-memory representation of the real DOM elements generated by React components before any changes are made to the page.",
//           correct: true,
//         },
//         {
//         text: "DOM is a control flow statement for specifying iteration, which allows code to be executed repeatedly",
//         correct: false, 
//         },
//         {
//           text: "DOM is a the main character is fast and furious",
//           correct: false,
//         },
//         {
//           text: "DOM is short for Dominos Pizza",
//           correct: false, 
//         }
//       ]
//     },
//     {
//       id: 3,
//       question: "What is a component in React?",
//       answers: [
//         {
//           text: "a part of element of a larger whole",
//           correct: false,
//         },
//         {
//         text: "Components are conditional statements",
//         correct: false, 
//         },
//         {
//           text: "Components creates a new array from calling a function for every array element",
//           correct: false,
//         },
//         {
//           text: "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML",
//           correct: true, 
//         }
//       ]
//     },
//     {
//         id: 4,
//         question: "Why can't browsers read JSX?",
//         answers: [
//           {
//             text: "JSX is not valid JavaScript. Browsers can only read JavaScript objects",
//             correct: true,
//           },
//           {
//           text: "Browsers are not smart enough to read JSX",
//           correct: false, 
//           },
//           {
//             text: "JSX can be read by browsers.",
//             correct: false,
//           },
//           {
//             text: "JSX is valid JavaScript. Babel is not needed to do the compiling.",
//             correct: false, 
//           }
//         ]
//       },
//       {
//         id: 5,
//         question: "How can you embed two or more components into one?",
//         answers: [
//           {
//             text: "Change the component to a JSX file to embed it.",
//             correct: false,
//           },
//           {
//           text: "React does not allow embedding components together.",
//           correct: false, 
//           },
//           {
//             text: "In React, you can embed another or mulitple components by calling it inside of a component's return statement.",
//             correct: true,
//           },
//           {
//             text: "Call the component before the return statement.",
//             correct: false, 
//           }
//         ]
//       },
//       {
//         id: 6,
//         question: "What are Props?",
//         answers: [
//           {
//             text: "Props are conditional statements.",
//             correct: false,
//           },
//           {
//           text: "Props are React Components.",
//           correct: false, 
//           },
//           {
//             text: "Props are arguments passed into React components and are passed down similar to HTML attributes. Props are read-only and can be JavaScript expressions, string literals, callback functions, and other components",
//             correct: true,
//           },
//           {
//             text: "Props are congratulating someone or appreciating them for their skill or talent.",
//             correct: false, 
//           }
//         ]
//       },
//       {
//         id: 7,
//         question: "What is State in React? How is it used?",
//         answers: [
//           {
//             text: "State is an object managed by its own component, unlike props which are passed to a different component, and it stores property values for that component. In react, anytime the state changes, it triggers a re-render of the component. State is initialized in the constructor method and manipulating the state is done with the setState() method.",
//             correct: true,
//           },
//           {
//           text: "State is the particular condition that someone or something is in at a specific time.",
//           correct: false, 
//           },
//           {
//             text: "State are arguments passed into React components and are passed down similar to HTML attributes.",
//             correct: false,
//           },
//           {
//             text: "State is a a nation or territory considered as an organized political community under one government.",
//             correct: false, 
//           }
//         ]
//       },
//       {
//         id: 8,
//         question: "What is an arrow function in React? How is it used?",
//         answers: [
//           {
//             text: "An arrow function is is used when trying to show direction or position in the code.",
//             correct: false,
//           },
//           {
//           text: "An arrow function points towards an activity or purpose natural to or intended for a person or thing",
//           correct: false, 
//           },
//           {
//             text: "The arrow function is a syntactically alternative to regular function expressions but without its own bindings to the this keyword. Functional components are created using an arrow function format",
//             correct: true,
//           },
//           {
//             text: "An Arrow function is a directional function. When navigating we use this.",
//             correct: false, 
//           }
//         ]
//       },
//       {
//         id: 9,
//         question: "What is React Router?",
//         answers: [
//           {
//             text: "React Router is an internet box provided by the top networks.",
//             correct: false,
//           },
//           {
//           text: "React Router is a standard library for routing in React and is used mainly for developing single page applications and offers dynamic routing. Some of its components are BrowserRouter, Route, Link, and Switch.",
//           correct: true, 
//           },
//           {
//             text: "React Router connects components for easy navigation",
//             correct: false,
//           },
//           {
//             text: "React Router is a programming language that enables the navigation among views of various componenets in a React Application.",
//             correct: false, 
//           }
//         ]
//       },
//       {
//         id: 10,
//         question: "Which React Router advantage is false?",
//         answers: [
//           {
//             text: "It enables navigation among different application views.",
//             correct: false,
//           },
//           {
//           text: "React Router allows you to make the app have less errors.",
//           correct: true, 
//           },
//           {
//             text: "It keeps the UI in sync with the URL.",
//             correct: false,
//           },
//           {
//             text: "It allows dynamic URLs, using URL paramaters, and nesting routes inside others.",
//             correct: false, 
//           }
//         ]
//       },
//       {
//         id: 11,
//         question: "What are events in React?",
//         answers: [
//           {
//             text: "Anything that a browser or user does, including changing a field or clicking a button. React events are not HTML events and are synthetic events.",
//             correct: true,
//           },
//           {
//           text: "Events in React are important things that happen in the application.",
//           correct: false, 
//           },
//           {
//             text: "Events in React do nothing.",
//             correct: false,
//           },
//           {
//             text: "Events in React are camelCase rather than lowercase.",
//             correct: false, 
//           }
//         ]
//       },
//       {
//         id: 12,
//         question: "Which one of these is not a key feature of React?",
//         answers: [
//           {
//             text: "React is used as a backend framework.",
//             correct: true,
//           },
//           {
//           text: "React makes use of virtual DOM instead of the regular or real DOM.",
//           correct: false, 
//           },
//           {
//             text: "React is used for server side rendering.",
//             correct: false,
//           },
//           {
//             text: "React has uni-directional or one-way data flow or data binding.",
//             correct: false, 
//           }
//         ]
//       },
//       {
//         id: 13,
//         question: "Which one of these is not an advantage of using React?",
//         answers: [
//           {
//             text: "React helps enhance the performance of a web or mobile application",
//             correct: false,
//           },
//           {
//           text: "React can be used on the server as well as on the client side",
//           correct: false, 
//           },
//           {
//             text: "None of the above.",
//             correct: true,
//           },
//           {
//             text: "React can be integrated with other frameworks like Angular, Meteor and more",
//             correct: false, 
//           }
//         ]
//       },
//       {
//         id: 14,
//         question: "Which one of these are not a part of React's component lifecycle?",
//         answers: [
//           {
//             text: "Initial rendering phase: In this phase a component starts its life journey and makes its way to the DOM.",
//             correct: false,
//           },
//           {
//           text: "Unmounting phase: It is the final stage of the component. In this phase the component is destroyed and removed from the lifecycle.",
//           correct: false, 
//           },
//           {
//             text: "Updating phase: When the component is added to the DOM it can update and re-render when its props or state changes.",
//             correct: false,
//           },
//           {
//             text: "Recycle Phase: When the component is ready to be used again.",
//             correct: true, 
//           }
//         ]
//       },
//       {
//         id: 15,
//         question: "What is React?",
//         answers: [
//           {
//             text: "React is a front end JavaScript library which was developed by Facebook in the year 2013. It is used to develop reusable UI by following the component based approach.",
//             correct: true,
//           },
//           {
//           text: "React is a platform and framework for building single-page client applications using HTML and TypeScript. React is written in TypeScript.",
//           correct: false, 
//           },
//           {
//             text: "React is a progressive framework for building user interfaces. Unlike other monolithic frameworks, React is designed from the ground up to be incrementally adoptable.",
//             correct: false,
//           },
//           {
//             text: "React is an object-oriented computer programming language commonly used to create interactive effects within web browsers.",
//             correct: false, 
//           }
//         ]
//       }
//   ]