"use client";
import BurgerIcon from "@/public/icons/burger.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { RefObject } from "react";
interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  menuRef: RefObject<HTMLDivElement>;
}

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  menuRef,
}: MobileMenuProps) {
  return (
    <div className="flex items-center gap-4 md:hidden">
      <button
        className="flex flex-col"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg"
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

      <Link className="font-archivo-black text-xl font-extrabold" href="/">
        SHOP.CO
      </Link>
    </div>
  );
}
