// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Effect from './components/Effect';
import SideMenu from './components/SideMenu';
import TopMenu from './components/TopMenu';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/portfolio';

function App() {
  return (
    < >
      <div className='fixed w-[100%] h-[100%] -z-10'>
        <Effect />
      </div>
      <div className='h-[100%] font-sans'>
        <SideMenu />
        <TopMenu />
        <div className='pt-[60px] pl-[60px] h-[100%] dark:text-white'>
          <Header />
          <div className='pt-[70vh]'></div>
          <About />
          <div className='pt-[40vh]'></div>
          <Skills />
          <div className='pt-[40vh]'></div>
          <Portfolio />
          <div className='pt-[40vh]'></div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
