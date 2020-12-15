import React, { useState } from 'react';
import emojiData from './data/emojiData';
import emojiMatrix from './data/emojiMatrix';
import './App.css';

const App = () => {

  const [emoji, setEmoji] = useState('');
  const [emojiMeaning, setEmojiMeaning] = useState('Please enter or click an emoji');


  const clickEmojiHandler = (emoji) => {
    setEmoji(emoji);
    setEmojiMeaning(emojiData[emoji]);
  };

  const inputEmojiHandler = event => {
    let userInput = event.target.value;
    setEmoji(userInput);

    userInput = userInput.trim(' ');

    if (userInput === '') {
      setEmojiMeaning('Please enter or click an emoji');
    }
    else {
      const userInputMeaning = emojiData[userInput];

      if (userInputMeaning === undefined) {
        setEmojiMeaning('Sorry. This emoji is not in our Database');
      } else {
        setEmojiMeaning(userInputMeaning);
      }

    }
  };


  return (
    <div className='App'>

      <div className='AppTitle'>
        EmojiBase
      </div>

      <input className='UserInput' onChange={inputEmojiHandler} value={emoji} />
      <br />

      <div className='EmojiMeaning'>
        {emojiMeaning}
      </div>
      <br />

      <div className='EmojiMatrixSection'>

        <div className='EmojiMatrix'>
          {emojiMatrix.map((row, rowIdx) =>
            <div
              key={rowIdx}
              className='EmojiRow'>
              {
                row.map((rowItem, itemIdx) =>
                  <div
                    key={itemIdx}
                    onClick={() => clickEmojiHandler(rowItem)}
                    className='EmojiItem'>{rowItem}
                  </div>
                )}
            </div>
          )}
        </div>

      </div>

      <footer>
        <div className="learn-more">To learn more about this bootcamp, visit <span>
          <a className='HighlightedLink' rel='noreferrer' target="_blank" href="https://neog.camp">neog.camp</a>.</span>
        </div>

        <div className="made-with">
          Made with ❤️ by <span>
            <a className='HighlightedLink' rel='noreferrer' target="_blank" href="https://github.com/satvikchachra">Satvik Chachra</a>
          </span>
        </div>

        <div className="connect-with">
          Connect with me:
        </div>

        <div className="social-icons">
          <a rel='noreferrer' target="_blank" href="https://www.github.com/satvikchachra">
            <i className="fa fa-github fa-1.5x" aria-hidden="true"></i>
          </a>
          <a rel='noreferrer' target="_blank" href="https://www.twitter.com/satvikchachra19">
            <i className="fa fa-twitter fa-1.5x" aria-hidden="true"></i>
          </a>
          <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/satvikchachra">
            <i className="fa fa-linkedin fa-1x" aria-hidden="true"></i>
          </a>
        </div>
      </footer>


    </div>
  );
}

export default App;
