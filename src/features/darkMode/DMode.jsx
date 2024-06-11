import React from 'react'
import { toggleDarkMode } from './darkModeSlice';
import { useSelector, useDispatch } from 'react-redux';

const DMode = () => {

    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const dispatch = useDispatch();
    console.log('dmode is = ', darkMode)
  return (
    <div className='p-2 m-2'>
        <button className='p-2 m-2' onClick={()=> dispatch(toggleDarkMode())} >Toggle dark mode</button>
    </div>
  )
}

export default DMode
