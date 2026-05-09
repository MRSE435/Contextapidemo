import React, { useContext } from 'react'
import { CounterContextPipeline } from '../context/CounterContext'
const Counter = () => {
    const CounterContext=useContext(CounterContextPipeline);
  return (
    <div>
      <button onClick={()=>CounterContext.setcount(CounterContext.count+1)}>INCREMENT</button>
      <button onClick={()=>CounterContext.setcount(CounterContext.count-1)}>DECREMENT</button>
    </div>
  )
}

export default Counter
