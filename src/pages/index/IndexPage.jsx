import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/counter/counterSlice'
import { Link } from 'react-router-dom'

function IndexPage() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className=''>IndexPage</h1>
      <div className='py-3'>
        <button
          className='btn'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button className='btn btn-error'>{count}</button>
        <button
          className='btn'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default IndexPage