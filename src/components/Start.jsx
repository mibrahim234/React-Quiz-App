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

// fix sidebar
// fix css for answers
// set up questions for data page 
// set up function when user answers all questions
