import { useEffect, useState } from 'react'
import './App.css'
import Counter from './features/counter/Counter'
import DMode from './features/darkMode/DMode';
import { useSelector } from 'react-redux';


function App() {
  document.querySelector('html').classList.remove('dark');

    const darkMode = useSelector((state)=> state.darkMode.darkMode);
    // console.log('new valueof dmode - ', darkMode);
    if(darkMode){
      document.querySelector('html').classList.add('dark');
    }
   

  return (
    <>
      <div><h1 className='text-xl dark:bg-pink-400'>Hello redux basic project</h1>
      <Counter/>
      <DMode/>
      </div>
    </>
  )
}

export default App
