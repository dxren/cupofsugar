import { Item } from "@prisma/client";
import { Form, json, useLoaderData } from "@remix-run/react";
import sugar from "~/img/sugar.png";
import { loader } from "../item";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useState } from "react";

interface ModalProps {
  item: Item;
  onClose: () => void;
  isAuthed: boolean;
}

function Modal({ item, onClose, isAuthed }: ModalProps) {
  if (!item) return null;
  const data = useLoaderData<typeof loader>();
  const [itemDescription, setItemDescription] = useState(item.description)
  const showSaveButton = () => {
    return itemDescription !== item.description
  }

  function handleBackdropClick(event: { target: any; currentTarget: any; }) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <Form method="POST" onSubmit={onClose}>
      <input type="hidden" name="edit" value="true" />
      <div
        onClick={handleBackdropClick}
        className="fixed inset-0 bg-opacity-5 z-50 flex justify-center items-center"
      >
        <div
          className="bg-base-100 border-4 border-neutral p-4 rounded-lg max-w-xl w-full h-auto"
          onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the modal
        >
          <h2 style={{ fontSize: "18px", fontWeight: "bold", paddingBottom: "20px" }}>{item.title}</h2>
          <div className="flex justify-center bg-gray-200"><img
            src={item.imageUrl || sugar}
            alt={item.description}
            className="object-contain w-96 max-h-96 h-auto rounded flex"
          />
          </div>

          <p style={{ paddingTop: "20px" }}>{isAuthed ? <input name="description" type="text" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} /> : <p>{item.description}</p>}</p>
          <button
            onClick={onClose} // This button also closes the modal
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            Close
          </button>
          {isAuthed && showSaveButton() && (
            <input
              type="submit" // This button also closes the modal
              className="bg-green-500 text-white px-4 py-2 rounded mt-4" value="Save" />
          )}
        </div>
      </div>
    </Form>
  );
}

export default Modal;



