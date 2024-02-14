import SideBar from './components/SideBar';
import Header from './components/Header';
import Tab from './components/Tab';
import FooterNavigation from './components/FooterNavigation';
import MobileView from './components/DetailSection/MobileView';
import DesktopView from './components/DetailSection/DesktopView';
import { useEffect, useLayoutEffect, useState } from 'react';
import {sampleCardData} from './helper';

function App():JSX.Element {
  const [height,setHeight]=useState(360);
  
  useEffect(()=>{
    const d = localStorage.getItem('cardData') as string;
    if(!d?.length){
      localStorage.setItem('cardData',JSON.stringify(sampleCardData))
    }
    
  },[])
  useLayoutEffect(()=>{
    document?.getElementById?.('aboveCard')?.clientHeight && setHeight(document?.getElementById?.('aboveCard')?.clientHeight || 360)
  },[])
  return (
    <>
      <div className='flex flex-row font-["Open_Sans"] bg-[#0C365A] sm:bg-white'>
        <div className='lg:block hidden'><SideBar /></div>
        <div id='aboveCard' className='sm:p-12 px-6 py-7  w-full'>
          <Header />
          <Tab />
          <div className='sm:block hidden'><DesktopView /></div>
          <div className='sm:hidden'><MobileView height={height}/></div>
        </div>
        <div className='block lg:hidden'><FooterNavigation/></div>
      </div>
    </>
  )
}

export default App
