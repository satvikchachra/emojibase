import React, { useState } from 'react';
import emojiData from './data/emojiData';
import emojiMatrix from './data/emojiMatrix';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InputBox from './components/InputBox/InputBox';
import EmojiMeaning from './components/EmojiMeaning/EmojiMeaning';
import EmojiSection from './components/EmojiSection/EmojiSection';
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
      <Header title="EmojiBase" />
      <br />
      <InputBox inputHandler={inputEmojiHandler} emojiValue={emoji} />
      <EmojiMeaning meaning={emojiMeaning} />
      <br />
      <EmojiSection matrix={emojiMatrix} clicked={clickEmojiHandler} />
      <Footer />
    </div>
  );
}

export default App;
