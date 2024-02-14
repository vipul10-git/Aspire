import cardDetail from '../../../assets/cardDetail.svg';
import transactionDetail from '../../../assets/transactionDetail.svg';
import Accordian from './Accordian';
import {detailsSampleData} from './helper';

function TransactionDetails({callBackOpen}:{callBackOpen?:(k:boolean)=>void}) {
    return (
        <div className='flex flex-col gap-2 justify-start w-full'>
           <Accordian icon={cardDetail} title={'Card details'} data={detailsSampleData} isOpen={false} callBackOpen={callBackOpen}/>
           <Accordian icon={transactionDetail} title={'Recent transactions'} data={detailsSampleData} isOpen={false} callBackOpen={callBackOpen}/>
        </div>
    )
}

export default TransactionDetails
