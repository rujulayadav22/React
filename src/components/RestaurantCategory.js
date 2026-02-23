
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="mb-6">
      {/* Header */}
      <div className="bg-gray-100 shadow-md p-4 cursor-pointer"
           onClick={setShowIndex}>

        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
      </div>

      {/* Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
