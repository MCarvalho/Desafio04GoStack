import React from 'react';
import './App.css';

import HeaderMain from './components/header/index';
import TimeLine from './components/timeline/index'

function App(){
  return (
    <div id="main">
      <HeaderMain />
      <TimeLine />
    </div> 
  );
}


export default App;