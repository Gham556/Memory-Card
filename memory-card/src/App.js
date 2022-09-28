import  React, { useState }  from 'react';
import './App.css';
import ImageLoader from './component/imageLoader';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <div>
        <h1>Memory Game!</h1>
        <h2>Click An Image To Increase Your Score, But Be Sure Not To Click The Same Image Twice!</h2>
      </div>
      <div>
        <div>{count}</div>
        <button onClick={incrementCount}>Increment Count</button>
        </div>  
        <div>
          <ImageLoader/>
        </div>
    </div>
  );
}

export default App;
