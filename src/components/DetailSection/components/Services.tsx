import DeactivateCard from '../../../assets/DeactivateCard.svg';
import FreezeCard from '../../../assets/FreezeCard.svg';
import ReplaceCard from '../../../assets/ReplaceCard.svg';
import SetSpendLimit from '../../../assets/SetSpendLimit.svg';
import GPay from '../../../assets/GPay.svg';

const featureDetail = [
  {
    name: 'Freeze card',
    icon: FreezeCard,
  },
  {
    name: 'Set spend limit',
    icon: SetSpendLimit,
  },
  {
    name: 'Add to GPay',
    icon: GPay,
  },
  {
    name: 'Replace card',
    icon: ReplaceCard,
  },
  {
    name: 'Cancel card',
    icon: DeactivateCard,
  },
];

function Services() {
  return (
    <div className='pt-5 m-0 pb-3 rounded-xl flex flex-row justify-between gap-2 px-7 h-fit sm:w-[330px] lg:w-[400px] bg-[#EDF3FF]'>
      {featureDetail.map((item, index) => (
        <div key={index} className='flex flex-col gap-1 items-center' role='button' onClick={() => alert(item.name)}>
          <img src={item.icon} alt={item.name} width='32px' height='32px' />
          <div className='text-[13px] mb-2 text-center text-[#0C365A]'>
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
