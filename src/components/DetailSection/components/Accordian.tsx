import React, { useState } from "react";
import finance from '../../../assets/finance.svg';
import FileStorage from '../../../assets/file-storage.svg';
import Megaphone from '../../../assets/megaphone.svg';
import Flights from '../../../assets/flights.svg';
import upArrow from '../../../assets/upArrow.svg';
import downArrow from '../../../assets/down-arrow.svg';
const iconType = {
    'travel': {icon :Flights ,bgcolor:'bg-[#00D6B51A]'},
    'food':  {icon :FileStorage ,bgcolor:'bg-[#009DFF1A]'},
    'misc':  {icon :Megaphone ,bgcolor:'bg-[#F251951A]'},
};

type DataType = {
    type: string;
    transactionType: string;
    amount: number;
    date: string;
    name: string;
};

interface AccordianProps {
    icon: string;
    title: string;
    data: DataType[];
    isOpen: boolean;
    callBackOpen: (isOpen: boolean) => void;
}

const Accordian: React.FC<AccordianProps> = ({ icon, title, data, isOpen, callBackOpen }) => {
    const [open, setOpen] = useState(isOpen);

    return (
        <div className="border-[1px] border-[#F0F0F0] rounded-xl overflow-auto">
            <div role='button' className="cursor-pointer items-center w-full p-5 gap-2 flex rounded-xl bg-[#F5F9FF]" onClick={() => { setOpen(!open); !open === true && callBackOpen?.(!open); }}>
            <div style={{flex:1}} ><img className="" src={icon} width='24px' height='24px' alt={title} /></div>
                <div style={{flex:8}} className="text-sm text-[#0C365A]">{title}</div>
                <div style={{flex:1}} ><img  src={open ? upArrow : downArrow} alt='arrow' /></div>
            </div>
            <div className="overflow-auto max-h-[14rem]">
                {open && data.map(i => (
                    <div className="flex justify-start border-b-[1px] mt-2 mx-2 pb-2">
                        <div className="w-[15%] flex justify-center items-center">
                            <img className={`p-2 rounded-lg ${iconType[i.transactionType].bgcolor}`} src={iconType[i.transactionType].icon} width='32px' height='32px' alt={i.transactionType} />
                        </div>
                        <div className="w-[60%] flex gap-1 flex-col">
                            <div className="text-sm">{i.name}</div>
                            <div className="text-xs opacity-60">{i.date}</div>
                            <div className="flex flex-row gap-2">
                                <img className="py-1 px-1 rounded-md bg-[#325BAF]" src={finance} alt='xyz' width='18px' height='18px' />
                                <div className="text-xs text-[#325BAF]">{i.type === 'refund' ? 'Refund on debit card' : 'Charged to debit card'}</div>
                            </div>
                        </div>
                        <div className="w-[15%] text-sm text-[#01D167]">+ S${i.amount}</div>
                    </div>
                ))}</div>
        </div>
    )
}

export default Accordian