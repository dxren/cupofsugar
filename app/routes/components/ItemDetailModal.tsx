import { Item } from "@prisma/client";
import sugar from "~/img/sugar.png";

interface ModalProps {
  item: Item;
  onClose: () => void;
}

function Modal({ item, onClose }: ModalProps) {
  if (!item) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div
        className="bg-white p-4 rounded-lg max-w-xl w-full h-auto"
        onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the modal
      >
        <h2>{item.title}</h2>
        <img
          src={item.imageUrl || sugar}
          alt={item.description}
          className="max-w-full h-auto rounded"
        />
        <p>{item.description}</p>
        <button
          onClick={onClose} // This button also closes the modal
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
