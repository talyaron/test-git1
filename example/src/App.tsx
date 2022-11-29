import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { addToCounter, doubleCounter, getRandomNumber } from './cont/counter';

function App() {
  const [count, setCount] = useState(0);

  function handleAddCounter(){
    addToCounter(count,setCount);
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
        <button onClick={handleAddCounter}>
          count is {count}
        </button>
        <button onClick={()=>{getRandomNumber(count, setCount)}}>
          GET RANDOM NUMBER
        </button>
        <button onClick={()=>{doubleCounter(count, setCount)}}>
          MULTIPLE COUNTER
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
