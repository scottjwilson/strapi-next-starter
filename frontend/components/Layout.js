import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
const Layout = ({ children, title, description }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main className="">
        {" "}
        {router.pathname === "/" && <Hero />}
        {children}
      </main>

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "QDs Double Barrel BBQ",
  description: "Delicious family owned BBQ",
  keywords: "bbq, pop up truck, bbq truck, antelope valley restaurant",
};

export default Layout;
