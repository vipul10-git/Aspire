import Card from './components/Card';
import Services from './components/Services';
import TransactionDetails from './components/TransactionDetails';

function DesktopView():JSX.Element {
    return (
        <div className='shadow-md p-10 rounded-lg flex flex-row gap-8 h-[60vh]'>
            <div>
                <Card />
                <div className='my-5'>
                    <Services />
                </div>
            </div>
            <div className='w-[50%] overflow-auto'><TransactionDetails /></div>

        </div>
    )
}

export default DesktopView;
