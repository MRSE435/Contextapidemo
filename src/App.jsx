import { useState } from 'react'
import './App.css'
import { useContext } from 'react'
import { CounterContextPipeline } from './context/CounterContext'
import Counter from './components/Counter'

function App() {
  const counterpipeline=useContext(CounterContextPipeline);
  return (
    <>
      <h1>{counterpipeline.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />

    </>
  )
}

export default App
