import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "react-use-cart";
import Headroom from "react-headroom";
import Search from "./Search";
import AuthContext from "@/context/AuthContext";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  MenuAlt3Icon,
} from "@heroicons/react/outline";
const Navbar = ({ toggleSidebar }) => {
  const { user, logout } = useContext(AuthContext);
  const { items, totalItems, isEmpty } = useCart();
  return (
    <>
      <Headroom>
        <nav className="bg-gray-100">
          <div className="max-w-6xl mx-auto py-2">
            <div className="flex justify-between">
              <div className="flex space-x-6">
                {/* logo */}
                <div className="flex items-center justify-center">
                  <Link href="/">
                    <a className="brand">
                      <Image
                        src="/logo.png"
                        width={50}
                        height={50}
                        alt="QD's Double barrel bbq"
                      />
                      <span className="pl-2">QD's Double barrel bbq</span>
                    </a>
                  </Link>
                </div>
                {/* Search */}
                <div className="flex items-center">
                  <Search />
                </div>
                {/* primary nav */}
                <div className="primary-nav">
                  {user ? (
                    <>
                      <Link href="/menu">
                        <a className="nav-link">menu</a>
                      </Link>
                      <Link href="/account/my-orders">
                        <a className="nav-link">my orders</a>
                      </Link>

                      <button onClick={logout} className="nav-link">
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link href="/about">
                        <a className="nav-link">about</a>
                      </Link>
                      <Link href="/services">
                        <a className="nav-link">services</a>
                      </Link>
                      <Link href="/photos">
                        <a className="nav-link">photos</a>
                      </Link>
                      <Link href="/menu">
                        <a className="nav-link">menu</a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              {/* secondary nav */}

              <div className="secondary-nav">
                <Link href="/account/login">
                  <a className="profile-link">
                    <UserCircleIcon className="h-6 w-6" />
                  </a>
                </Link>

                <Link href="/order">
                  <a className="profile-link">
                    <span className="relative inline-block">
                      <ShoppingBagIcon className="h-6 w-6" />
                      {!isEmpty && (
                        <span className="order-badge">{totalItems}</span>
                      )}
                    </span>
                  </a>
                </Link>
              </div>
              {/* mobile button goes here */}
              <div className="md:hidden flex items-center">
                <button onClick={toggleSidebar}>
                  <MenuAlt3Icon className="h-6 w-6 ml-4" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </Headroom>
    </>
  );
};

export default Navbar;
