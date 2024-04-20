import { Item } from "@prisma/client";
import React, { useState } from "react";
import { ListBox, ListBoxItem, ProgressBar, Text } from "react-aria-components";
import Modal from "./ItemDetailModal";

interface ImageGridProps {
  items: Item[]
}

function ImageGrid( props: ImageGridProps ) {

  const items = props.items
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const handleImageClick = (item: Item) => {
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
            textValue={item.title}
            className="relative rounded outline-none group cursor-default"
          >
            <img
              src={item.imageUrl || ""}
              alt={item.description}
              className="h-full w-full object-cover rounded"
              onClick={() => handleImageClick(item)}
            />
            <Text
              slot="label"
              className="text-[11px] text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-full block mt-1"
            >
              {item.title}
            </Text>
            {/* <Switch>Available</Switch> */}
          </ListBoxItem>
        )}
      </ListBox>
      {isModalOpen && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
  );
}

export default ImageGrid;
