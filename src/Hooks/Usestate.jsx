import './UseState.css'
import React,{useState} from 'react'

const UseState = () => {
    const [count,setCount] = useState(0);
    const increase = () => setCount(count+1);
    const decrease  = () => setCount(count-1);

  return (
    <div className='container'>
      <div><button onClick={increase} className='buttonIncrease'> + </button></div>
      <div className="Heading"><h1 className='heading'>{count}</h1></div>
      <div><button onClick={decrease} className='buttonDecrease'> - </button></div>    
    </div>
  )
}

export default UseState;
