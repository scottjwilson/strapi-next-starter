import "../styles/globals.css";
import { CartProvider } from "react-use-cart";
import { AuthProvider } from "@/context/AuthContext";
import "@fontsource/fugaz-one";
import "@fontsource/barlow";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
  );
}
