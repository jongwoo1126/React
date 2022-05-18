import React from 'react';
import { useDispatch } from 'react-redux';

const Child2 = () => {

    const dispatch = useDispatch();

    const onIncreament = () => {
        dispatch({type: 'increment'})
    }

    const onDecreament = () => {
         dispatch({type: 'decrement'})
    }

    return (
        <div className='Child2'>
            <h3>Child2</h3>
            <button onClick={onIncreament}>increment</button>
            <button onClick={onDecreament}>decrement</button>
        </div>
    );
};

export default Child2;