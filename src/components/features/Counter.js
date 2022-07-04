import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  const increase = () => dispatch(increment());
  const decrease = () => dispatch(decrement());
  const resets = () => dispatch(reset());



  return (
    <div>
        <h1>Counter App</h1>
        <p id='counter-value'>Count: {count}</p>
        <button id='increase-button' onClick={increase}> Increase </button>
        <button id='decrease-button'onClick={decrease}> Decrease </button>
        <button id='reset-button' onClick={resets}> Reset </button>

    </div>
  )
}

export default Counter