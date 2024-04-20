import { Item } from "@prisma/client";
import React, { useState } from "react";
import { ListBox, ListBoxItem, ProgressBar, Text } from "react-aria-components";

interface ImageGridExampleProps {
  items: Item[]
}

function ImageGridExample( props: ImageGridExampleProps ) {

  const items = props.items
  

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
            textValue={item.title}
            className="relative rounded outline-none group cursor-default"
          >
            <img
              src={item.imageUrl || ""}
              alt={item.description}
              className="h-[80px] w-full object-cover rounded group-selected:ring-2 group-focus-visible:ring-4 group-selected:group-focus-visible:ring-4 ring-offset-2 ring-sky-600"
            />
            <Text
              slot="label"
              className="text-[11px] text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-full block mt-1"
            >
              {item.title}
            </Text>
          </ListBoxItem>
        )}
      </ListBox>
    </div>
  );
}

export default ImageGridExample;
