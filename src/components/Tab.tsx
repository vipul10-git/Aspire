import {useState} from 'react';
const tabVal = ['My debit cards', 'All company cards'];

function Tab():JSX.Element {
    const [selectedTab,setSelectedtab] = useState(tabVal[0])

    return (<div className='flex flex-row gap-4 pt-3 sm:pt-9 pb-[12px]'>
        {tabVal.map(i => {
            return (<div className='flex flex-col'>
            <div className={selectedTab === i ? 'text-sm cursor-pointer text-white sm:text-black':'text-sm opacity-30 cursor-pointer text-white sm:text-black'} onClick={()=>setSelectedtab(i)}>{i}</div>
            {selectedTab === i ? <div className='border-solid bg-[#23CEFD] border-blue-1 h-[2px]'/>:<></>}
            </div>)
        })}
    </div>
    )
}

export default Tab
