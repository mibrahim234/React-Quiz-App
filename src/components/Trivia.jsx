import { useEffect, useState } from "react";

export default function ({
  data, 
  setStop, 
  questionNumber, 
  setQuestionNumber
}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName ] = useState("answer");

    useEffect(() => {
      // -1 b/c array starts at 0 
      setQuestion(data[questionNumber - 1 ]);
    },[data, questionNumber])

    const handleClick = (a) =>{
      selectedAnswer(a);
      setClassName("answer active")
      // setTimeOut(() => {
      //   setClassName(a.correct ? "answer correct" : "answer wrong")
      // }, 3000)
    }

  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
          {/* ? checks where theres a question or not and then will map the answers*/}
          {question?.answers.map((a) => (
            <div
             className={selectedAnswer === a ? className : "answer"} 
             onClick={() => !selectedAnswer && 
             handleClick(a)}>
              {a.text}
            </div>
          ))}
          
        </div>
    </div>
  )
}
