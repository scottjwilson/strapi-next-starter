import "@/styles/globals.css";

import { AuthProvider } from "@/context/AuthContext";
import "@fontsource/fugaz-one";
import "@fontsource/barlow";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
