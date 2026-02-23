import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cardSlice"; // change to ../utils/cartSlice if your file name is cartSlice.js
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => {
    const price = (item?.price ?? item?.defaultPrice ?? 0) / 100;
    return sum + price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
            <p className="mt-1 text-sm text-gray-600">
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in cart
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => dispatch(clearCart())}
              disabled={cartItems.length === 0}
              className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Clear Cart
            </button>

            <div className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm">
              Total: ₹{total.toFixed(0)}
            </div>
          </div>
        </div>

        {/* Body */}
        {cartItems.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-gray-800">
              Your cart is empty 🍽️
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Add some items from a restaurant menu to see them here.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Items */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-4">
                  <h2 className="text-lg font-bold text-gray-900">Items</h2>
                </div>

                <div className="divide-y divide-gray-100">
                  {cartItems.map((item, index) => {
                    const price =
                      (item?.price ?? item?.defaultPrice ?? 0) / 100;

                    return (
                      <div
                        key={`${item?.id}-${index}`} 
                        className="flex gap-4 px-6 py-5"
                      >
                        {/* Image */}
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                          {item?.imageId ? (
                            <img
                              src={CDN_URL + item.imageId}
                              alt={item?.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                              No Image
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-base font-semibold text-gray-900">
                                {item?.name}
                              </p>

                              {item?.description && (
                                <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                                  {item.description}
                                </p>
                              )}
                            </div>

                            <p className="shrink-0 text-sm font-bold text-gray-900">
                              ₹{price}
                            </p>
                          </div>

                          <div className="mt-3 flex items-center gap-3">
                            <button
                              onClick={() => dispatch(removeItem())}
                              className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-800 transition hover:bg-gray-200"
                              title="Remove last item (your current reducer uses pop)"
                            >
                              Remove
                            </button>

                            <span className="text-xs text-gray-500">
                              Note: your removeItem currently removes the last
                              item (pop).
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">Summary</h3>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between text-gray-700">
                    <span>Items</span>
                    <span className="font-semibold">{cartItems.length}</span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      ₹{total.toFixed(0)}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Delivery</span>
                    <span className="font-semibold">₹0</span>
                  </div>

                  <div className="my-3 h-px bg-gray-200" />

                  <div className="flex justify-between text-gray-900">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">₹{total.toFixed(0)}</span>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-xl bg-black px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90">
                  Checkout
                </button>

                <p className="mt-3 text-center text-xs text-gray-500">
                  (Checkout button is UI only for now)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;