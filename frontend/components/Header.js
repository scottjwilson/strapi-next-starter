import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon, UserRemoveIcon, MoonIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <div className="bg-black py-2"></div>
      <div className="hidden xl:flex items-center justify-between max-w-7xl mx-auto py-4 px-2">
        <div>
          <Link href="/">
            <a className="font-semibold dark:text-gray-50 flex items-center rounded-full bg-">
              <Image
                src="/profile.jpg"
                className="rounded-full"
                width={50}
                height={50}
                alt="author profile picture"
              />
              <span className="px-3">Scott Wilson</span>
            </a>
          </Link>
        </div>
        <nav className="w-1/2">
          <div className="flex items-center justify-end dark:text-gray-50 space-x-5 font-semibold">
            <Link href="/about">
              <a className="dark:hover:bg-gray-900 px-6 py-3 rounded-md">
                About
              </a>
            </Link>

            <Link href="/services">
              <a className="dark:hover:bg-gray-900 px-6 py-3 rounded-md">
                Services
              </a>
            </Link>

            <Link href="/projects">
              <a className="dark:hover:bg-gray-900 px-6 py-3 rounded-md">
                Projects
              </a>
            </Link>

            <Link href="/contact">
              <button className="font-semibold bg-green-100 rounded-md px-6 py-2 dark:bg-purple-700 shadow transform hover:-translate-y-0.5 hover:shadow-2xl duration-300">
                Hire Me Today
              </button>
            </Link>

            <button
              aria-label="Toggle Dark Mode"
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <MoonIcon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
