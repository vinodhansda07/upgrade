import { useReducer } from 'react';
import numReducer from '../reducers/numReducer';

function Counter() {
  const [num, dispatch] = useReducer(numReducer, 0);
  
  return (
    <>
      <div className='container'>
        <div className='row mx-auto'>Number is {num}</div>
        <div className='row'>
          <div className='col-sm'>
            <button onClick={() => dispatch({type:'INCR'})}>INCR</button>
          </div>
          <div className='col-sm'>
            <button onClick={() => dispatch({type:'DECR'})}>DECR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
