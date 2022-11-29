import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { addToCounter, doubleCounter, getRandomNumber } from "./cont/counter";
import { getRandomDog } from "./cont/dogAPI";
import Emmiter, { em } from "./view/components/Emmiter";



function App() {
  const [count, setCount] = useState(0);
  const [dogImage, setDogImage] = useState<string | null>(null);
const [emmiter, setEmmiter] = useState('no emit')

  useEffect(()=>{
    em.on('test',(a)=>{
      console.log('emitted!',a)
      // console.log(this)
      setEmmiter(`emiting ${a}`);
    })
   return ()=>{
    em.removeListener('test')
   }
  },[])



  function handleAddCounter() {
    addToCounter(count, setCount);
  }

  async function handleGetDogImage() {
    const _dogImage = await getRandomDog();
    if (_dogImage) setDogImage(_dogImage);
  }

  return (
    <div className="App">
      <h1>My amazing app!??&&&&</h1>
      <h2>{emmiter}</h2>
      <div className="card">
        <button onClick={handleAddCounter}>count is {count}</button>
        <button
          onClick={() => {
            getRandomNumber(count, setCount);
          }}>
          GET RANDOM NUMBER
        </button>
        <button
          onClick={() => {
            doubleCounter(count, setCount);
          }}>
          MULTIPLE COUNTER
        </button>
      </div>
      <Emmiter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="wrapper">
        <button onClick={handleGetDogImage}>Fetch random dog</button>
        {dogImage ? <img className="dogImage" src={dogImage} /> : null}
      </div>
    </div>
  );
}

export default App;
