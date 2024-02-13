
const AddNewCardModal = ({closeModal}:{closeModal:()=>void}) => {


  return (
    <div>

        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
          <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded max-w-md">
            <p>Modal Content</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
    </div>
  );
};

export default AddNewCardModal;
