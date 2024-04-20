function ItemDetailModal({ item, onClose }) {
    return (
    <div className="fixed inset-0 bg-white bg-opacity-95 p-4 z-10 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-cover" />
        <div className="p-4">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p>{item.description}</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={onClose}>Close</button>
        </div>
        </div>
    </div>
    );
}

export default ItemDetailModal;
