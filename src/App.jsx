import "./app.css";
import { useEffect, useState, useMemo } from "react";
import Trivia from "./components/Trivia"; 
import Timer from "./components/Timer"; 
import Start from "./components/Start"; 
// import Data from "./components/Data"; 


function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [username, setUsername] = useState(null);

  // when true the game finishes, and score is shown 
  // or wrong answer is chosen 
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

// const data = <Data /> 
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
          }
]

  // useMemo hook only runs when one of its dependencies update (can improve performance)
  const moneyPyramid = useMemo (()=> 
    [
    { id: 1, amount: "$ 100"},
    { id: 2, amount: "$ 200"},
    { id: 3, amount: "$ 300"},
    { id: 4, amount: "$ 500"},
    { id: 5, amount: "$ 1000"},
    { id: 6, amount: "$ 2000"},
    { id: 7, amount: "$ 4000"},
    { id: 8, amount: "$ 8000"},
    { id: 9, amount: "$ 16000"},
    { id: 10, amount: "$ 32000"},
    { id: 11, amount: "$ 64000"},
    { id: 12, amount: "$ 125000"},
    { id: 13, amount: "$ 250000"},
    { id: 14, amount: "$ 500000"},
    { id: 15, amount: "$ 1000000"},
  ].reverse(),
   []
   );
    
  // chooses the the correct score for user 
  useEffect(()=>{
    questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber -1).amount);
  },[moneyPyramid, questionNumber])

  return (
    <div className="app">
    {username ? (
      <> 
      {/* Main Container */}
      <div className="main">
          {stop ?
          ( <h1 className="endText">You earned: {earned}</h1> )
          : (
            <>
           <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber} />
            </div>
        </div>
        <div className="bottom">
          {/* if question is correct go to next question */}
          <Trivia data={data}
           setStop={setStop} 
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}/> 
        </div>
      </>
          )}

      </div>

            
      {/* Side Container*/}
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
       <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
      <span className="moneyListItemNumber">{m.id}</span>
      <span className="moneyListItemAmount">{m.amount}</span>
    </li>
     ))}
        </ul>
      </div>
      </>
    ) : (
       <Start setUsername={setUsername} />
     )}
    </div>
  );
}

export default App;
