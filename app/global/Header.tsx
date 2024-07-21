"use client";
import BurgerIcon from "@/public/icons/burger.svg";
import CartIcon from "@/public/icons/cart.svg";
import CrossIcon from "@/public/icons/cross.svg";
import SearchIcon from "@/public/icons/search.svg";
import UserIcon from "@/public/icons/user.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useClickAway } from "react-use";

type HeaderProps = {
  user: boolean;
};

export default function Header({ user }: HeaderProps) {
  const [open, setOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleMenu = (toggled: boolean) => {
    setIsMenuOpen(toggled);
  };

  useClickAway(menuRef, () => setIsMenuOpen(false));
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {!user && (
        <div
          className={`bg-black flex justify-center py-3 ${
            !open ? "hidden" : ""
          }`}
        >
          <p className="text-white text-xs">
            Sign up and get 20% off to your first order.{" "}
            <Link
              className="font-medium relative text-underline"
              href="sign-up"
            >
              Sign Up Now
            </Link>
          </p>
          <button
            className="absolute md:right-8 lg:right-24 xs:hidden md:flex"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CrossIcon className="fill-white w-5 h-5" />
          </button>
        </div>
      )}
      <header>
        <div className="my-container">
          <div className="py-6 gap-4 flex items-center justify-between border-gray-200 border-b">
            <div className="md:flex xs:hidden gap-10 items-center">
              <Link
                className="font-extrabold text-xl font-archivo-black"
                href="/"
              >
                SHOP.CO
              </Link>
              <nav>
                <ul className="flex gap-6">
                  <li>Shop</li>
                  <li>
                    <Link href="">On Sale</Link>
                  </li>
                  <li>
                    <a href="#new-arrivals">New Arrivals</a>
                  </li>
                  <li>
                    <a href="#brands">Brands</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className=" md:hidden flex items-center gap-4">
              <button
                className="flex flex-col"
                onClick={() => toggleMenu(true)}
              >
                <BurgerIcon />
              </button>

              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, x: "-100%" }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : "-100%",
                }}
                transition={{ duration: 0.17 }}
                className="fixed top-0 left-0 bg-white shadow-lg w-64 h-full"
              >
                <nav>
                  <ul>
                    <li>
                      <Link href="/home">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </motion.div>
              {isMobile ? (
                ""
              ) : (
                <Link
                  className="font-extrabold text-xl font-archivo-black"
                  href="/"
                >
                  SHOP.CO
                </Link>
              )}
            </div>

            {isMobile && (
              <div>
                <input
                  className="border rounded-lg h-8 outline-none py-2 px-3 w-full text-sm"
                  type="text"
                />
              </div>
            )}

            <div className="">
              <ul className="flex gap-3">
                {!isMobile &&
                  (!isSearchOpen ? (
                    <li>
                      <button onClick={() => setIsSearchOpen(true)}>
                        <SearchIcon />
                      </button>
                    </li>
                  ) : (
                    <li className="relative">
                      <input
                        ref={inputRef}
                        className="border rounded-lg h-8 outline-none py-2 px-3 w-full  text-sm"
                        type="text"
                      />
                      <button onClick={() => setIsSearchOpen(false)}>
                        <CrossIcon className="fill-black absolute w-4 h-4 top-2 right-2" />
                      </button>
                    </li>
                  ))}

                <li>
                  <Link href="/cart">
                    <CartIcon />
                  </Link>
                </li>
                <li>
                  <UserIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
