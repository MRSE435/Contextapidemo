import { useState } from 'react'
import './App.css'
import { useContext } from 'react'
import { CounterContextPipeline } from './context/CounterContext'
import Counter from './components/Counter'
import DemoComp from './components/DemoComp'
import { Routes,Route } from 'react-router-dom'
function App() {
  const counterpipeline=useContext(CounterContextPipeline);
  return (
    <>
      <h1>{counterpipeline.count}</h1>
      <Routes>
        <Route path="/" element={
          <>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          </>
        }/>
        <Route path="/demo" element={<DemoComp/>}/>
      </Routes>

    </>
  )
}

export default App
