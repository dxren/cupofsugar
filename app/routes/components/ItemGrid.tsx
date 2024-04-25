import React, { useState } from "react";
import { ListBox, ListBoxItem, ProgressBar, Text } from "react-aria-components";
import Modal from "./ItemDetailModal";
import NewItemModal from "./NewItemModal";
import { Item } from "@prisma/client";
import sugar from "~/img/sugar.png";

function ItemGrid({ items, isAuthed = false }: { items: Item[], isAuthed: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleImageClick = (item: Item) => {
    console.log("item clicked:", item);
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative rounded group cursor-pointer overflow-hidden"
            onClick={() => handleImageClick(item)}
          >
            <img
              src={item.imageUrl || sugar}
              alt={item.description}
              className="h-auto w-full object-contain max-h-[200px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedItem && (
        <Modal isAuthed={isAuthed} item={selectedItem} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default ItemGrid;
