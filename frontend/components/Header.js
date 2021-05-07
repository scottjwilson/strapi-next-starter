import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon, UserRemoveIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between ml-6 mr-6 mt-4">
        <div>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <nav>
          <div className="space-x-3">
            <Link href="/events">
              <a>About</a>
            </Link>

            <Link href="/services">
              <a>Services</a>
            </Link>

            <Link href="/contact">
              <a>Contact</a>
            </Link>

            <Menu as="div" className="relative inline-block text-left">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="bg-gray-900 text-gray-50 rounded-md px-4 py-2">
                      Account
                    </Menu.Button>
                  </div>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/account/login">
                            <a
                              className={`${
                                active ? "bg-gray-200" : "bg-gray-100"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              <UserIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                              Login
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-200" : "bg-gray-100"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            <UserRemoveIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                            Sign Out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </nav>
      </div>
    </header>
  );
}
