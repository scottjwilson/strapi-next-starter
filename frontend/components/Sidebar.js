import Link from "next/link";
import Image from "next/image";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={
        isOpen
          ? "transition duration-200 ease-in-out absolute min-h-screen flex inset-y-0 z-10"
          : "hidden transform -translate-x-full"
      }
    >
      <aside className="from-gray-700 to-gray-900 bg-gradient-to-bl w-full">
        {/* logo */}
        <div>
          <Link href="/">
            <a className="flex items-center py-5 px-2 text-gray-100 font-bold">
              <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="QD's Double barrel bbq"
              />
              <span className="uppercase mr-2">QD's Double barrel bbq</span>
            </a>
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <Link href="/">
            <a className="py-3 px-16 capitalize font-semibold text-gray-300 hover:text-gray-100 hover:bg-gray-900 hover:bg-opacity-50 hover:border-r-4 hover:border-white">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="py-3 px-16 capitalize font-semibold text-gray-300 hover:text-gray-100 hover:bg-gray-900 hover:bg-opacity-50 hover:border-r-4 hover:border-white">
              about
            </a>
          </Link>
          <Link href="/">
            <a className="py-3 px-16 capitalize font-semibold text-gray-300 hover:text-gray-100 hover:bg-gray-900 hover:bg-opacity-50 hover:border-r-4 hover:border-white">
              services
            </a>
          </Link>
          <Link href="/menu">
            <a className="py-3 px-16 capitalize font-semibold text-gray-300 hover:text-gray-100 hover:bg-gray-900 hover:bg-opacity-50 hover:border-r-4 hover:border-white">
              menu
            </a>
          </Link>
          <Link href="/photos">
            <a className="py-3 px-16 capitalize font-semibold text-gray-300 hover:text-gray-100 hover:bg-gray-900 hover:bg-opacity-50 hover:border-r-4 hover:border-white">
              photos
            </a>
          </Link>
        </div>

        {/* <div className="py-4 px-4 mx-auto">
          <Link
            href="/"
            className="font-bold bg-yellow-400 text-yellow-800 flex py-2 px-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
              />
            </svg>
            CALL TO ORDER: <br /> +1-818-235-7563
          </Link>
        </div> */}
      </aside>
    </div>
  );
};

export default Sidebar;
