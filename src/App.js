import React, {useState} from 'react'
import './App.css';

function App() {
    const [text, setText] = useState('');
    const [wordsAmount, setWordsAmount] = useState(0);

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

    return (
        <div className="game-area">
          <h1>Typing Speed Game</h1>
          <textarea className="typing-area" value={text} onChange={handleChange}/>
          <h4 className="timer">Time remaining: 00:00</h4>
          <button className="start-button" onClick={calculateWords}>Start</button>
          <h2>Word count: {wordsAmount}</h2>
        </div>
    )
}

export default App;
