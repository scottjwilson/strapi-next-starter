import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className=" flex flex-col min-h-screen w-full">
        <Header />

        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
