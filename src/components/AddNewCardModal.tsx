import { useState } from "react";
function generateNumberString() {
    const generateChunk = () => Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
    return Array.from({ length: 4 }, generateChunk).join(' ');
  
  }
const AddNewCardModal = ({closeModal}:{closeModal:()=>void}) => {
    const [formVal,setFormVal] = useState('')
    const onSubmit = ()=>{
        const payload = {
            name:formVal,
            cardNumber: generateNumberString(),
            freeze: false,
            cvv: Math.floor(Math.random() * 100).toString(),
            ex: '12/20'
        }
        const d = localStorage.getItem('cardData');
        const updatedDate = [...JSON.parse(d),payload];
        localStorage.setItem('cardData', JSON.stringify(updatedDate))
        closeModal()
    }
  return (
    <div>

        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center  z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded max-w-md z-50">
            <p>Add new Card Date</p>
            <input type='text'  placeholder='name' value={formVal} onChange={(e)=>setFormVal(e.target.value)}/>
            <button
              onClick={onSubmit}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
              disabled={!formVal.length}
            >
              Submit
            </button>
          </div>
        </div>
    </div>
  );
};

export default AddNewCardModal;
