import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handelAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => {
        const info = item?.card?.info;
        const price = (info?.price ?? info?.defaultPrice ?? 0) / 100;

        return (
          <div
            key={info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            {/* LEFT SIDE */}
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-semibold">{info?.name}</span>
                <span className="block text-sm mt-1">₹{price}</span>
              </div>

              <p className="text-xs text-gray-600">{info?.description}</p>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-3/12 p-4 relative">
              {info?.imageId && (
                <img
                  src={CDN_URL + info.imageId}
                  alt="food"
                  className="rounded-lg"
                />
              )}

              <button
                className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-lg text-sm shadow-lg"
                onClick={() => handelAddItem(info)} // ✅ only necessary change
              >
                ADD+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;