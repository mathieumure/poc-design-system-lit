import {useEffect, useRef, useState} from 'react'
import './App.css'
import '@dsy/base/base.css';
import '@dsy/button'
import '@dsy/input'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John Doe');
  const increaseCounter = () => setCount(count+1)

  const input = useRef<HTMLElement>();

  useEffect(() => {
    if (input.current) {
      input.current.addEventListener('input', handleInput)
    }

    return () => {
      input.current?.removeEventListener('input', handleInput)
    }
  }, [input])

  const handleInput = (e: Event) => {
    setName((e as CustomEvent).detail.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {name} has {count} click
        </h1>
        <dsy-input type="text" value={`${name}`} ref={input}/>
        <div>
          <dsy-button onClick={increaseCounter}>Click me</dsy-button>
          <dsy-button level="secondary" onClick={increaseCounter}>Click me otherwise</dsy-button>
        </div>
      </header>
    </div>
  )
}

export default App
