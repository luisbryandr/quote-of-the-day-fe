import './App.css';
import { useState } from 'react';

const quotes = [{id:1, quote:'t is not that we have a short time to live, but that we waste a lot of it.', author: 'Seneca'},
{id:2, quote:'He who is brave is free', author: 'Seneca'},
{id:3, quote:'No man is free who is not a master of himself.', author: 'Epictetus'},
{id:4, quote:'Man conquers the world by conquering himself.', author: 'Zeno'},
{id:5, quote:'Happiness is a good flow of life.', author: 'Zeno'},
{id:6, quote:'The happiness of your life depends upon the quality of your thoughts.', author: 'Marcus Aurelius'},
{id:7, quote:'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.', author: 'Marcus Aurelius'},
{id:8, quote:'A gem cannot be polished without friction, nor a man perfected without trials.', author: 'Seneca'},
{id:9, quote:'We suffer more often in imagination than in reality.', author: 'Seneca'},
{id:10, quote:'The greatest wealth is to live content with little.', author: 'Plato'},
{id:11, quote:'Difficulties strengthen the mind, as labor does the body.', author: 'Plato'},
{id:12, quote:'No person has the power to have everything they want, but it is in their power not to want what they dont have, and to cheerfully put to good use what they do have.', author: 'Seneca'},
{id:13, quote:'The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.', author: 'Marcus Aurelius'},
{id:14, quote:'He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.', author: 'Marcus Aurelius'},
{id:15, quote:'The art of living is more like wrestling than dancing.', author: 'Marcus Aurelius'},
{id:16, quote:'Death smiles at us all; all we can do is smile back.', author: 'Marcus Aurelius'},
{id:17, quote:'The greater the difficulty, the more glory in surmounting it.', author: 'Epicurus'},
{id:18, quote:'Freedom is not procured by a full enjoyment of what is desired, but by controlling the desire.', author: 'Epictetus'},
{id:19, quote:'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', author: 'Ralph Waldo Emerson'},
{id:20, quote:'It is not what happens to you, but how you react to it that matters.', author: 'Epictetus'},


]





function App() {
  const [entry,setEntry] = useState('The quote of the day is: Click the button to find out, happy learning')

  const generateQuote = () =>{
  
    const newQuote = Math.floor(Math.random()*quotes.length)
    console.log(newQuote)
    setEntry(`"${quotes[newQuote].quote}" -${quotes[newQuote].author} `)
  }
  return (
    <div className="App">{}
      <h1>{entry}
        {/* {quotes[Math.floor(Math.random()*quotes.length)].quote} */}
      </h1>
      <button onClick={generateQuote}>Generate Quote</button>

      <form >
        <label>Enter your Favorite Quote Here:</label>
        <input 
          type="text"
          placeholder="Your Favorite Quote Here"
          value=""    
          name="Quote"
          />
        <button>Enter</button>  
      </form>
      
    </div>
  );
}

export default App;
