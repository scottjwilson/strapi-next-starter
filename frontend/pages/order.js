import { useState, useEffect, useContext } from "react";
import { parseCookies } from "@/helpers/index";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import PageHero from "@/components/PageHero";
import Layout from "@/components/Layout";
import { TrashIcon } from "@heroicons/react/outline";
import { API_URL } from "@/config/index";
export default function OrderPage() {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    cartTotal,
    emptyCart,
  } = useCart();

  const router = useRouter();

  const [order, setOrder] = useState({});

  const formatToCurrency = (amount) => {
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout>
      <PageHero>
        {isEmpty ? (
          <Link href="/menu">Add food to get started!</Link>
        ) : (
          "Your Order"
        )}
      </PageHero>
      <div className="max-w-5xl mx-auto">
        {" "}
        {/* cart items */}
        <div className="border rounded shadow">
          <ul className="list">
            {items.map((item) => (
              <li key={item.id} className="list-item">
                <div>
                  <span className="font-bold">
                    {item.quantity} x {item.name}
                  </span>
                  <p class="text-xs">{formatToCurrency(item.itemTotal)}</p>
                </div>

                <div className="space-x-4">
                  <button
                    className="qty-btn"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    className="qty-btn"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-gray-50 py-4 px-2 flex justify-between">
            <p>Total: {formatToCurrency(cartTotal)}</p>
            <button onClick={emptyCart} className="flex">
              Clear Order
              <TrashIcon className="h-6 w-6 ml-2" />
            </button>
          </div>
          <div className="w-96 mb-4 mx-auto flex justify-center items-center">
            {" "}
            <button className="mt-4 py-3 px-4 w-full hover:bg-red-900 bg-gray-900 text-gray-100 font-semibold rounded-xl transition ease-in-out duration-500">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export const getStaticProps = async () => {
//   const client = new ApolloClient({
//     uri: process.env.STRAPI_GRAPHQL_API,
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({ query: GET_SERVICES_PAGE });

//   return {
//     props: {
//       servicesTitle: data.service,
//       servicesAll: data.services,
//     },
//   };
// };
