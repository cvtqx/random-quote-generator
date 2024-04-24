import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import QuoteBox from "./components/QuoteBox";

function App() {
  const [randomQuote, setRandomQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState('#0dcaf0')

  function utilityRandomNumberPicker(max) {
    return Math.floor(Math.random()*max)
  };

  function generateBgColor() {
     const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        
        for (let i = 0; i < 6; i++){
            hexColor += hex[utilityRandomNumberPicker(hex.length)]
        }
        setColor(hexColor)
  };

  useEffect(() => {
      getRandomQuote()  
  }, [])
  
  async function getRandomQuote() {
    setIsLoading(true);
    try {
      const response = await axios.get('https://api.quotable.io/quotes/random');
      setRandomQuote(response.data[0].content);
      setAuthor(response.data[0].author);
    } catch (error) {
      console.error('Error fetching random quote', error);
    } finally {
      setIsLoading(false);
    }
    }

  function handleClick() {
    generateBgColor();
    getRandomQuote();
  };

  return (
    <div style={{ height: "100%", backgroundColor: color, transition: "1s" }}>
      {!isLoading && <QuoteBox quote={randomQuote} author={author} handleClick={handleClick} color={color} />}                      
                     
    </div>
    );
  }


export default App
