

function ItemCard({ item, onClick }) {
  return (
    <div
      className="p-4 border shadow rounded cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(item)}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{item.name}</h2>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
}

export default ItemCard;
