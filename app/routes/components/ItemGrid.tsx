// import { useState } from "react";
// import ItemCard from "./ItemCard";
// import ItemDetailModal from "./ItemDetailModal";

// function ItemGrid({ items }) {
//   const [selectedItem, setSelectedItem] = useState(null);

//   return (
//     <div className="p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {items.map((item) => (
//           <ItemCard key={item.id} item={item} onClick={setSelectedItem} />
//         ))}
//       </div>
//       {selectedItem && (
//         <ItemDetailModal
//           item={selectedItem}
//           onClose={() => setSelectedItem(null)}
//         />
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { ListBox, ListBoxItem, ProgressBar, Text } from "react-aria-components";

type Item = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

function ImageGridExample() {
  const [items] = useState<Item[]>([
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

  return (
    <div className="sm:p-8 rounded-lg flex justify-center">
      <ListBox
        aria-label="Items"
        items={items}
        selectionMode="multiple"
        layout="grid"
        className="overflow-auto outline-none bg-white rounded-lg shadow p-2 h-[500px] w-full max-w-[500px] grid grid-cols-3 gap-3 empty:flex"
      >
        {(item) => (
          <ListBoxItem
            textValue={item.name}
            className="relative rounded outline-none group cursor-default"
          >
            <img
              src={item.imageUrl}
              alt={item.description}
              className="h-[80px] w-full object-cover rounded group-selected:ring-2 group-focus-visible:ring-4 group-selected:group-focus-visible:ring-4 ring-offset-2 ring-sky-600"
            />
            <Text
              slot="label"
              className="text-[11px] text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-full block mt-1"
            >
              {item.name}
            </Text>
          </ListBoxItem>
        )}
      </ListBox>
    </div>
  );
}

export default ImageGridExample;
