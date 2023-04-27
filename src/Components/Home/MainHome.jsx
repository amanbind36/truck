import React from 'react';
import Home from './Home';
import Home1 from './Home1';
import Hot from './Hot';
import Appa from '../tcard/Tcard';
import Trk from '../trk/Trk';
import Buy from '../buysell/Buy';
import Expand from '../MoreMenu/Expand';

const MainHome = () => {
  return (
    <>
        <Home1/>
    <Home/>
    <Hot/>

    <Buy/>
     <Expand/>
     <Trk/>
     <Appa/>
    
    
    </>
  )
}

export default MainHome