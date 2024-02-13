import { useState } from 'react';
import add from '../assets/add.svg';
import AddNewCardModal from './AddNewCardModal'
function Header() {
    const [addNewCard, setAddNewCard] = useState(false);

    const handleAddNewCard = () => {
        setAddNewCard(true)
    }
    
    return (
        <>
        <div className='flex flex-col gap-2 justify-start'>
            <div className='pb-[2px] text-[14px] text-white sm:text-black'>Available balance</div>
            <div className='flex flex-row gap-2 items-center justify-between'>
                <div className='flex flex-row gap-2 items-center'>
                    <span className='rounded bg-[#01D167] py-1 px-3 w-fit text-white text-[13px]'>S$</span>
                    <span className='text-5 sm:text-6 text-white sm:text-black'>3,000</span>
                </div>
                <button
                    onClick={handleAddNewCard}
                    className='rounded sm:bg-[#0C365A] text-[#23CEFD] sm:text-white text-sm py-2 sm:px-3 sm:w-fit h-fit flex flex-row gap-2 items-center'>
                    <img src={add} alt='add' className='mr-1' />
                    New card
                </button>
            </div>
        </div>
        {addNewCard && <AddNewCardModal/>}
        </>
    )
}

export default Header
