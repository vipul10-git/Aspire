import cardDetail from '../../../assets/cardDetail.svg';
import transactionDetail from '../../../assets/transactionDetail.svg';
import Accordian from './Accordian';

const details = [
    {
        type:'refund',
        transactionType:'travel',
        amount:150,
        date:'20 May 2020',
        name:'SpiceJet'
    },
    {
        type:'debit',
        transactionType:'food',
        amount:150,
        date:'20 May 2020',
        name:'Swiggy'
    },
    {
        type:'refund',
        transactionType:'misc',
        amount:150,
        date:'20 May 2020',
        name:'Clothing'
    },
    {
        type:'debit',
        amount:150,
        transactionType:'food',
        date:'20 May 2020',
        name:'Zomato'
    },
    {
        type:'refund',
        transactionType:'food',
        amount:150,
        date:'20 May 2020',
        name:'Zomato'
    },

]
function TransactionDetails({callBackOpen}:{callBackOpen:()=>void}) {

    return (
        <div className='flex flex-col gap-2 justify-start w-full'>
           <Accordian icon={cardDetail} title={'Card details'} data={details} isOpen={false} callBackOpen={callBackOpen}/>
           <Accordian icon={transactionDetail} title={'Recent transactions'} data={details} isOpen={false} callBackOpen={callBackOpen}/>
        </div>
    )
}

export default TransactionDetails
