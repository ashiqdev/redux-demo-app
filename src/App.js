import React from 'react';
import { increment, decrement, multiply } from './actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const loggedIn = useSelector(state => state.loggedIn);
  const counter = useSelector(state => state.counter);
  const info = loggedIn && <p>You are logged in</p>;
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <pre>REDUX DEMO APP</pre>
      {info}
      <h3>{counter}</h3>

      <button onClick={() => dispatch(increment(5))}>ADD</button>
      <button onClick={() => dispatch(decrement(5))}>SUBSTRACT</button>
      <button onClick={() => dispatch(multiply(5))}>MULTIPLY</button>
    </div>
  );
}

export default App;
