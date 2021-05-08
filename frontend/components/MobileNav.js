import Link from "next/link";
import {
  HomeIcon,
  LightBulbIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/outline";
export default function MobileNav({ toggleSidebar }) {
  return (
    <nav className="xl:hidden fixed bottom-0 inset-x-0 flex justify-between bg-green-100 dark:bg-gray-700 text-sm">
      <Link href="/">
        <a className="w-full py-4 block text-center hover:bg-green-700 hover:text-gray-50 dark:hover:bg-gray-600">
          <HomeIcon className="h-6 w-6 mx-auto" />
          Home
        </a>
      </Link>
      <Link href="/about">
        <a className="w-full py-4 block text-center hover:bg-green-700 hover:text-gray-50 dark:hover:bg-gray-600">
          <UserCircleIcon className="h-6 w-6 mx-auto" />
          About
        </a>
      </Link>
      <Link href="/projects">
        <a className="w-full py-4 block text-center hover:bg-green-700 hover:text-gray-50 dark:hover:bg-gray-600">
          <LightBulbIcon className="h-6 w-6 mx-auto" />
          Projects
        </a>
      </Link>

      <button
        onClick={toggleSidebar}
        className="w-full py-4 block text-center hover:bg-green-700 hover:text-gray-50 dark:hover:bg-gray-600"
      >
        <MenuIcon className="h-6 w-6 mx-auto" />
        Menu
      </button>
    </nav>
  );
}
