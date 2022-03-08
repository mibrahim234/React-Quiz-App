import { useRef } from "react"

export default function Start({setUsername}) {


    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };
  return (
    <div className="start">
        <input placeholder="Enter Your Name" className="startInput" 
        ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>Start</button>
        </div>
  )
}

// add a restart game button when user gets their score 
// import questions from data page
// set up function when user answers all questions, if user gets all correct display message: you won congratulations! else ...
// set up ReadMe