import Card from './components/Card';
import Services from './components/Services';
import TransactionDetails from './components/TransactionDetails';

function DesktopView():JSX.Element {
    return (
        <main className='shadow-md p-10 rounded-lg flex flex-row gap-8 h-[60vh] overflow-y-auto'>
            <section>
                <Card />
                <div className='my-5'>
                    <Services />
                </div>
            </section>
            <section className='w-[50%] overflow-auto'><TransactionDetails /></section>
        </main>
    )
}

export default DesktopView;
