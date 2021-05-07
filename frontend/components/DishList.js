import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DishList = ({ dishes }) => {
  const { addItem, items } = useCart();

  return (
    <div className="max-w-2xl mx-auto">
      {dishes.map((dish) => (
        <div key={dish.id}>
          <button
            onClick={() => {
              addItem(dish);
              toast.dark(`${dish.name} added!`);
            }}
            className="flex bg-gray-50 p-4 my-2 rounded font-barlow w-full justify-between hover:shadow-md transition ease-in-out duration-200"
          >
            <div>{dish.name}</div>
            <div>{dish.price}</div>
          </button>
        </div>
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default DishList;
