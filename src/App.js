import React, {useState, useEffect, useRef} from 'react'
import './App.css';

function App() {
    const typingArea = useRef(null);
    const [text, setText] = useState('');
    const [wordsAmount, setWordsAmount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isWorking, setIsWorking] = useState(false);

    useEffect(() => {
        // typingArea.current.disabled = !isWorking;
        if (timer > 0 && isWorking) {
            setTimeout(() => {
                setTimer(prevState => prevState - 1)
            }, 1000)
        } else if (isWorking) {
            setIsWorking(false);
            calculateWords();
        }
    }, [timer])

    function handleChange(e) {
        setText(e.target.value)
    }

    function calculateWords() {
        let wordsAmount = 0;
        let words = text.split(' ')
        for (let word of words) {
            if (word) {wordsAmount += 1}
        }
        setWordsAmount(wordsAmount)
    }

    function startTimer() {
        if (!isWorking) {
            setText('');
            setWordsAmount(0);
            setIsWorking(true);
            setTimer(10);
            typingArea.current.disabled = false;
            typingArea.current.focus();
        }
    }


    return (
        <div className="game-area">
          <h1>Typing Speed Game</h1>
          <textarea
              className={isWorking ? "typing-area" : "typing-area inactive-typing-area"}
              value={text}
              onChange={handleChange}
              disabled={!isWorking}
              ref={typingArea}
          />
          <h4 className="timer">Time remaining: {timer}</h4>
          <button
              className={isWorking ? "start-button inactive-button" : "start-button"}
              onClick={startTimer}
              disabled={isWorking}
          >Start</button>
          <h2>Word count: {wordsAmount}</h2>
        </div>
    )
}

export default App;
