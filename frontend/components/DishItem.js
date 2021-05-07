import Layout from "@/components/Layout";
import { useCart } from "react-use-cart";

export default function DishItem({ dish }) {
  const { addItem, items } = useCart();

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => addItem(dish)}
        className="flex bg-gray-50 p-4 my-2 rounded font-barlow w-full justify-between hover:shadow-md transition ease-in-out duration-200"
      >
        <div>{dish.name}</div>
        <div>{dish.price}</div>
      </button>
    </div>
  );
}
