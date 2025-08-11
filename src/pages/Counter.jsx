import { Button } from '@/components/ui/button';
import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount]= useState(0);
    const increment =()=>{
        const prevCount = count;
        setCount(prevCount + 1);
    }
    const decrement = () =>{
        const prevCount = count;
        setCount(prevCount - 1);
    }
    const reset = () =>{
        setCount(0);
    }

  return (
    <div className='flex  justify-center items-center gap-5 relative'>
        <h1 className='bg-gradient-to-b from-blue-500 to-purple-500 text-transparent bg-clip-text'>Counter</h1>
        <p className=' justify-center items-center  font-black text-5xl  absolute top-25'>{count}</p>
        <div className='flex  justify-center items-center absolute top-50 gap-5'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset Value</Button>
        </div>
        
    </div>
  )
}

export default Counter