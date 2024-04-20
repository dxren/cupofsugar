import { Item } from "@prisma/client";
import { useState } from "react";

  interface ItemProps {
    item: Item
    color: string
  }
  
  function ItemCard(props: ItemProps) {
    return (
      <div key={props.item.id}>
        I am an Item: {props.item.title} and my color is {props.color}
      </div>
    )
  }
  
  function itemToItemCard(item: Item): JSX.Element {
    return <ItemCard item={item} color="red" />
  }
  
  
  
  export default function AddItem() {
    const [itemList, setItemList] = useState<Item[]>([])
    const [counter, updateounter] = useState(0)
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Cup of Sugar: {counter} </h1>
          <div>
            <button onClick={async () => {
              updateounter(counter +1)
            }}>
              update counter
            </button>
  
            <button onClick={async () => {
              // const response = await fetch('http://localhost:5174/item?user_id=001a');
              // const data: Item[] = await response.json();
              // console.log(data)
              const newItem = {
                id: "00122",
                title: "new item",
                description: "newness",
                tag: ["default tag"],
                available: true,
                imageUrl: null,
                userId: "001a",
              }
              setItemList([...itemList, newItem])
            }}
            >
              add item
            </button>
            </div>
          {itemList.map(itemToItemCard)}
        </div>
    );
  }