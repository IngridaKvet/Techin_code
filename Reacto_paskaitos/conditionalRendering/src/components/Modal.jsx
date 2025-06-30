import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="m-7 flex flex-col items-center justify-center gap-2.5">
      <p>Exercise 8</p>

      <button className="bg-blue-400 px-4 py-2 rounded" onClick={toggleModal}>
        Open Modal
      </button>
      {isOpen ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="w-[200px] bg-white p-4 flex flex-col items-center justify-center gap-2.5 rounded">
            <h2>My modal</h2>
            <button
              className="bg-blue-400 px-4 py-2 rounded"
              onClick={toggleModal}
            >
              Close Modal
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
