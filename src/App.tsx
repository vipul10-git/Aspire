import SideBar from './components/SideBar';
import Header from './components/Header';
import Tab from './components/Tab';
import FooterNavigation from './components/FooterNavigation';
import MobileView from './components/DetailSection/MobileView';
import DesktopView from './components/DetailSection/DesktopView';
import { useEffect, useLayoutEffect, useState } from 'react';

function App() {
  const [height,setHeight]=useState(43);
  useEffect(()=>{
    const d = localStorage.getItem('cardData') as string;
    if(!d?.length){
      localStorage.setItem('cardData',JSON.stringify([
        {
            name: 'Mark Henry',
            cardNumber: '1234 5678 1234',
            ex: '12 / 20',
            cvv: '302',
            freeze:true
        },
        {
            name: 'Sam Alexander',
            cardNumber: '1234 5678 1235',
            ex: '12/20',
            cvv: '301',
            freeze:false
        },
        {
            name: 'Henry Alexander',
            cardNumber: '1234 5678 1290',
            ex: '06/27',
            cvv: '305',
            freeze:false
        },
    ]))
    }
    
  },[])
  useLayoutEffect(()=>{
    setHeight(document.getElementById('aboveCard').clientHeight)
  },[])
  return (
    <>
      <div className='flex flex-row font-["Open_Sans"] bg-[#0C365A] sm:bg-white'>
        <div className='sm:block hidden'><SideBar /></div>
        <div id='aboveCard' className='sm:p-12 px-6 py-7  w-full'>
          <Header />
          <Tab />
          <div className='sm:block hidden'><DesktopView /></div>
          <div className='sm:hidden'><MobileView height={height}/></div>
        </div>
        <div className='block sm:hidden'><FooterNavigation/></div>
      </div>
    </>
  )
}

export default App
