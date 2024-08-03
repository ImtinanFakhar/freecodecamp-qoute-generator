import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => response.json())
      .then(data => {
        setQuotes(data.quotes);
        setCurrentQuote(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
      });
  }, []);

  const getNewQuote = () => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div id="quote-box">
      <div id="text">{currentQuote.quote}</div>
      <div id="author">{currentQuote.author}</div>
      <button id="new-quote" onClick={getNewQuote}>New Quote</button>
      <a 
        id="tweet-quote" 
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote.quote}" - ${currentQuote.author}`)}`} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default App;
