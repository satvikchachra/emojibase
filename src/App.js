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
    <div className="App">
      EmojiBase
      <br />
      <input onChange={inputEmojiHandler} value={emoji} />
      <br />
      {emojiMeaning}
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

    </div>
  );
}

export default App;
