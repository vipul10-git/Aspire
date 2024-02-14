import {useState} from 'react';
import Account from '../assets/userM.svg';
import Credit from '../assets/CreditM.svg';
import Home from '../assets/LogoM.svg';
import Payments from '../assets/PaymentsM.svg';
import Card from '../assets/payM.svg';

const sideBarMenu = [
    { name: 'Home', icon: Home },
    { name: 'Cards', icon: Card },
    { name: 'Payments', icon: Payments },
    { name: 'Credit', icon: Credit },
    { name: 'Settings', icon: Account },
]
function FooterNavigation():JSX.Element {
    const [selectedSide,setSelectedSide] = useState('Cards')
    return (
        <div className='bg-white fixed bottom-0 left-0 h-16 w-full shadow-custom'>
            <div className='flex justify-between px-4 flex-rows pt-2'>
                {sideBarMenu.map(i => {
                    return <div className='flex gap-1 flex-col items-center justify-center' onClick={()=>setSelectedSide(i.name)}>
                        <img src={i.icon} alt={i.name} width='24px' height='24px' className='w-6 h-6'/>
                        <div className={selectedSide === i.name ? 'text-[#01D167] text-sm cursor-default' : 'text-[#DDDDDD] text-sm cursor-pointer'}>{i.name}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default FooterNavigation
