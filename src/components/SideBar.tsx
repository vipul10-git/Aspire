import logo from '../assets/logo.svg';
import Account from '../assets/Account.svg';
import Credit from '../assets/Credit.svg';
import Home from '../assets/Home.svg';
import Payments from '../assets/Payments.svg';
import Card from '../assets/Card.svg';
import { useState } from 'react';

const sideBarMenu = [
    { name: 'Home', icon: Home },
    { name: 'Cards', icon: Card },
    { name: 'Payments', icon: Payments },
    { name: 'Credit', icon: Credit },
    { name: 'Settings', icon: Account },
]
function SideBar():JSX.Element {
    const [selectedSide,setSelectedSide] = useState('Cards')
    return (
        <div className='bg-[#0C365A] h-[100vh] p-12'>
            <img src={logo} alt="logo" className='pb-5'/>
            <p className='opacity-30 text-[#FFFFFF] pb-20 text-[15px]'>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
            <div className='flex gap-14 flex-col'>
                {sideBarMenu.map(i => {
                    return <div className='flex gap-4' onClick={()=>setSelectedSide(i.name)}>
                        <img src={i.icon} alt={i.name} />
                        <div className={selectedSide === i.name ? 'text-[#01D167] cursor-default' : 'text-[#FFFFFF] cursor-pointer'}>{i.name}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SideBar
