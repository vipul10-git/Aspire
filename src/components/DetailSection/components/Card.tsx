import { useRef, useState, Children, useEffect } from 'react';
import eye from '../../../assets/eye.svg';
import logoLight from '../../../assets/logoLight.svg';
import Visa from '../../../assets/Visa.svg';
import Freeze from '../../../assets/freeze.svg';
import {CardType } from './types';

const renderIndicator = (cardDetail: CardType[], currentIndex: number, handleIndex: (k: number) => void) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: '8px',
      gap: '4px',
      width: '100%',
      justifyContent: 'center',
    }}
  >
    {cardDetail.map((_, index: number) => (
      <div
        key={index}
        onClick={() => handleIndex(index)}
        className={index === currentIndex ? 'w-4 h-1.5 rounded bg-[#01D167]' : 'cursor-pointer w-1.5 h-1.5 bg-[#01D167] opacity-30 rounded-xl'}
        role='button'
      />
    ))}
  </div>
)

function Card() {
  const [showCard, setShowCard] = useState<number | null>(null);
  const [currCard, setCurrCard] = useState<number>(0);
  const re = useRef<HTMLDivElement>(null);
  const [cardDetail, setCardDetail] = useState<CardType[]>([]);

  const handleAddNewCard = ()=>{
    const d = localStorage?.getItem?.('cardData') as string;
    setCardDetail(d?.length ? JSON.parse(d) : []);
  }

  useEffect(() => {
      handleAddNewCard()
  }, []);

  useEffect(() => {
    window.addEventListener('cardDataupdated',() => {
      handleAddNewCard()
    })
    return ()=> window.removeEventListener('cardDataupdated',()=>handleAddNewCard())
  }, []);

  const handleNext = (step: number) => {
    setCurrCard(step);
    setTimeout(() => re?.current?.scrollIntoView?.({ behavior: 'smooth' }), 0);
  };

  const freezeCard=(cardNumber:string) =>{

    for (let i = 0; i < cardDetail.length; i++) {
      if (cardDetail[i].cardNumber === cardNumber) {
        cardDetail[i].freeze = true;
        break;
      }
    }
    setCardDetail([...cardDetail])
    localStorage.setItem('cardData', JSON.stringify(cardDetail));
  }

  return (
    <div className='flex flex-col gap-2 w-full sm:w-[400px]'>
      <div className='flex justify-end'>
        <div className='flex flex-row gap-2 cursor-pointer' role='button' onClick={() => setShowCard(currCard)}>
          <img src={eye} alt="eys" /><span className='text-[#01D167] text-sms'>Show card number</span>
        </div>
      </div>
      <div className='flex flex-row relative'>
        <div id='2' className='bg-[#01D167] p-13 rounded-xl p-7 mb-1 flex flex-col text-white shrink-0 w-full sm:w-[400px] h-[180px] sm:h-[205px] justify-between'>
          <div className='flex justify-end'><img src={logoLight} alt="logoLight" width='73px' height='20px' /></div>
          <div className='flex justify-end'><img src={Visa} alt="Visa" width='58px' height='15px' className='h-[16px]' /></div>
        </div>
        <div id='3' className='absolute top-0 left-0 w-full h-full flex flex-row overflow-x-hidden'>
          {Children.toArray(cardDetail.map((i, index) => (
            <div className='shrink-0 p-7 text-white bg-transparent w-full sm:w-[400px] h-[180px] sm:h-[205px] flex items-start flex-col justify-center' ref={index === currCard ? re : undefined}>
              <div className='flex items-center justify-center mb-3 gap-1'>
                <div className='text-2xl'>{i.name}</div>
                {i.freeze === false ? <button onClick={() => freezeCard(i.cardNumber)} role='button'>
                  <img src={Freeze} alt='freeze' width='16px' height='16px' />
                </button>:<></>}
              </div>
              <div className='text-[14px] mb-2'>
                {showCard === index ? <>{i.cardNumber} &nbsp;2020</>
                  : <div className='flex flex-row gap-1 items-center'>{i.cardNumber.split('').map(i => {
                    if (i === ' ') {
                      return (<div className='w-[3px] h-[3px]'></div>)
                    } else {
                      return (<div className='w-[5px] h-[5px] rounded-full bg-white'></div>)
                    }
                  })} &nbsp;2020</div>}

              </div>
              <div className='text-[14px] mb-1 w-3/4 flex flex-row justify-between'>
                <span>Thru: {i.ex}</span>
                <span>CVV: {showCard === index ? i.cvv : '***'}</span>
              </div>
            </div>
          )))}
        </div>
      </div>
      {renderIndicator(cardDetail, currCard, handleNext)}
    </div >
  )
}

export default Card;
