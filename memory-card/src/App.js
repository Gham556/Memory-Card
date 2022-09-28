import  React, { useState }  from 'react';
import './App.css';
import ImageLoader from './component/imageLoader';
import aphrodite from './images/aphrodite.png';
import ares from  './images/ares.png';
import artemis from  './images/artemis.png';
import daphne from  './images/daphne.png';
import echo from  './images/echo.png';
import eris from  './images/eris.png';
import eros from  './images/eros.png';
import hades from  './images/hades.png';
import hecates from  './images/hecate.png';
import hephaestus from './images/hephaestus.png';
import hera from   './images/hera.png';
import hermes from  './images/hermes.png';
import persephone from  './images/persephone.png';
import poseidon from  './images/poseidon.png';
import psyche from  './images/psyche.png'; 

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

    const [imageSourceArray, setArray] = useState([aphrodite, ares, artemis, daphne, echo, eris, eros, hades, hecates, hephaestus, hera, hermes, persephone, poseidon, psyche]);

    const getRandom = () => {
        let currentIndex = imageSourceArray.length, randomIndex;
      
        console.log('runs')
        while (currentIndex !== 0) {
            randomIndex= Math.floor(Math.random()*currentIndex);
            currentIndex--; 
            [imageSourceArray[currentIndex], imageSourceArray[randomIndex]] = [imageSourceArray[randomIndex], imageSourceArray[currentIndex]]             
        };
        setArray(imageSourceArray);      
        return incrementCount()  
    };
    console.log('app runs')
  return (
    <div>
      <div>
        <h1>Memory Game!</h1>
        <h2>Click An Image To Increase Your Score, But Be Sure Not To Click The Same Image Twice!</h2>
      </div>
      <div>
        <div>{count}</div>
        </div>  
        <div>
          <ImageLoader imageSourceArray={imageSourceArray} getRandom={getRandom}/>
        </div>
    </div>
  );
}

export default App;
