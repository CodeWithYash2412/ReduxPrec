// import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { inceNum, decNum } from './actions'


const App = () => {

  const myState = useSelector((state) => state.IncDecNum);
  const dispatch = useDispatch();

  return (
    <div className='main'>
      <h1> Increase and Decrease Number </h1>
      <h2> With React and Redux </h2>
      <h1 className='number'> {myState} </h1>
      <div className="btns">
        <button onClick={() => dispatch(inceNum())} >Increase</button>
        <button onClick={() => dispatch(decNum())} >Decrease</button>
      </div>
    </div>
  )
}

export default App