import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/context/AuthContext";
export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
