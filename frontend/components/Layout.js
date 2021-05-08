import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
const Layout = ({ children, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-center bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-grow">{children}</main>
        <MobileNav toggleSidebar={toggleSidebar} />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
