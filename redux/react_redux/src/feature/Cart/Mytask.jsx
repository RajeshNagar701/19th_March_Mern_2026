import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Hide, Minus, Plus, Show, Toggle } from '../../app/userSlice';
import Img from './Img';

function Mytask() {


    const { number, isImage } = useSelector((state) => state.user);
    const dispatch=useDispatch();

    return (
        <div>
            <h1>My Cart</h1>
            <button className='btn btn-primary' onClick={()=>dispatch(Plus())}>+</button>
                <h1>{number}</h1>
            <button className='btn btn-primary' onClick={()=>dispatch(Minus())}>-</button>
            <hr />
            <button className='btn btn-primary' onClick={()=>dispatch(Hide())}>Hide</button>
            <button className='btn btn-primary' onClick={()=>dispatch(Show())}>Show</button>
            <button className='btn btn-primary' onClick={()=>dispatch(Toggle())}>Hide/Show</button>
            {
                isImage? <Img/> : null
            }
        </div>
    )
}

export default Mytask