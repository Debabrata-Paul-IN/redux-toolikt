import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { increment,decrement,increaseByValue,decreaseByValue } from './store/slices/counterSlice';

import './App.css';

function App() {
  const [value, setValue] = useState('');
  const currentState = useSelector((store)=>{return store.counter.value})
  const dispatch = useDispatch();
  const handleValue = (e)=>{
    setValue(e.target.value)
  }
  return (
    <section className='body'>
    <div><h2>Increment Decrement Using Redux Toolit</h2></div>
      <div>{"Result :  " + currentState}</div>
      <div>
        <button className='incBtn' onClick={()=>{dispatch(increment())}}>Increment (+) </button>
        <button className='decBtn' onClick={()=>{dispatch(decrement())}}>Decrement (-) </button>
      </div>
      <div>
        <button className='incBtn' onClick={()=>{dispatch(increaseByValue(Number(value)))}}>(+) By Value </button>
        <input onChange={handleValue} value={value} />
        <button className='decBtn' onClick={()=>{dispatch(decreaseByValue(Number(value)))}}>(-) By Value </button>
      </div>
    </section>
  );
}

export default App;
