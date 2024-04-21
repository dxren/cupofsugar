import React, { useState } from "react";
import { ListBox, ListBoxItem, ProgressBar, Text } from "react-aria-components";
import Modal from "./ItemDetailModal";

type Item = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

function ItemGrid() {
  const isAuthed = true;
  const [items] = useState([
    {
      id: 1,
      name: "Bouncy Castle",
      description: "Bouncy castle taking up closet space.",
      imageUrl:
        "https://cup-of-sugar-assets.s3.us-east-2.amazonaws.com/bouncy-castle.jpg",
    },
    {
      id: 2,
      name: "Dehumidifier",
      description: "A gently used dehumidifier.",
      imageUrl:
        "https://cup-of-sugar-assets.s3.us-east-2.amazonaws.com/dehumidifier.jpg",
    },
    {
      id: 3,
      name: "Drill",
      description: "Nice Dewalt drill",
      imageUrl:
        "https://cup-of-sugar-assets.s3.us-east-2.amazonaws.com/drill.jpg",
    },
    {
      id: 4,
      name: "Eloquent JS book",
      description: "Javascript programming book",
      imageUrl:
        "https://cup-of-sugar-assets.s3.us-east-2.amazonaws.com/eloquentjs.jpg",
    },
    {
      id: 5,
      name: "Tent",
      description: "tent",
      imageUrl:
        "https://cup-of-sugar-assets.s3.us-east-2.amazonaws.com/tent.jpg",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
    console.log("item clicked:", item);
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sm:p-8 rounded-lg flex justify-center w-full">
      <ListBox
        aria-label="Items"
        items={items}
        selectionMode="multiple"
        layout="grid"
        className="overflow-auto outline-none rounded-lg shadow p-2 h-[500px] w-full max-w-screen-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 empty:flex"
      >
        {(item) => (
          <ListBoxItem
            key={item.id}
            textValue={item.name}
            className="relative rounded outline-none group cursor-pointer"
          >
            <img
              src={item.imageUrl}
              alt={item.description}
              className="h-full w-full object-cover rounded"
              onClick={() => handleImageClick(item)}
            />
            <Text
              slot="label"
              className="text-[11px] text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-full block mt-1"
            >
              {item.name}
            </Text>
            {/* <Switch>Available</Switch> */}
          </ListBoxItem>
        )}
      </ListBox>
      {isModalOpen && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
  );
}

export default ItemGrid;
