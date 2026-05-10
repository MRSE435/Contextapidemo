import React from 'react'
import { useContext } from 'react'
import { CounterContextPipeline } from '../context/CounterContext'
const DemoComp = () => {
     const Democontext=useContext(CounterContextPipeline);
  return (
    <div>
        <h1>{DemoComp.count}</h1>
    </div>
  )
}

export default DemoComp
