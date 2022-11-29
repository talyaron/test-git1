import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { addToCounter, doubleCounter, getRandomNumber } from "./cont/counter";
import { getRandomDog } from "./cont/dogAPI";

function App() {
  const [count, setCount] = useState(0);
  const [dogImage, setDogImage] = useState<string | null>(null);

  function handleAddCounter() {
    addToCounter(count, setCount);
  }

  async function handleGetDogImage() {
    const _dogImage = await getRandomDog();
    if (_dogImage) setDogImage(_dogImage);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
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
