import React from 'react';
import logo from './logo.svg';
import './App.css';
import Effect from './components/Effect';

function App() {
  return (
    <>
          <div className='fixed w-[100%] h-[100%] -z-10'>
            <Effect/>
          </div>
    </>
  );
}

export default App;
