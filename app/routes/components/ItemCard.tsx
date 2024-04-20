import { Item } from "@prisma/client";


interface ItemCardProps {
  item:Item
  onClick:Function
}

function ItemCard(props: ItemCardProps) {

  const {item, onClick} = props
  
  return (
    <div
      className="p-4 border shadow rounded cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(item)}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-32 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{item.title}</h2>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
}

export default ItemCard;
