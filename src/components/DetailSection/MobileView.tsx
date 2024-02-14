import { useState } from 'react';
import Card from './components/Card';
import './index.css'
import Services from './components/Services';
import TransactionDetails from './components/TransactionDetails';

function DesktopView({ height }: { height: number }):JSX.Element {
    const cardHeight = window.innerHeight - height + 12
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Card />
            <div className={`fixed bottom-0 right-0 bg-white w-full flex flex-col items-center ${open ? 'heightAnimate':''}`} style={{ borderRadius: '20px 20px  0 0', height: open ? '98vh' : cardHeight + 'px' }}>
                <div className='bg-[#EDF3FF]'><button onClick={() => setOpen(!open)} ><div className='h-2 rounded bg-slate-500 w-8'></div></button></div>
                <Services />
            <div className='w-[100%] p-4'><TransactionDetails callBackOpen={setOpen}/></div>
            </div>
        </div>
    )
}

export default DesktopView;
