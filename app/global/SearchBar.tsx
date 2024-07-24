"use client";
import CrossIcon from "@/public/icons/cross.svg";
import SearchIcon from "@/public/icons/search.svg";
import { motion } from "framer-motion";
import { RefObject, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface SearchBarProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  inputRef: RefObject<HTMLInputElement>;
}

export default function SearchBar({
  isSearchOpen,
  setIsSearchOpen,
  inputRef,
}: SearchBarProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = useMediaQuery({ query: "min-width: 1024" });

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef, isSearchOpen]);

  if (isMobile) {
    return (
      <div>
        {!isSearchOpen ? (
          <button onClick={() => setIsSearchOpen(true)}>
            <SearchIcon />
          </button>
        ) : (
          <div>
            <button onClick={() => setIsSearchOpen(false)}>
              <CrossIcon className="h-6 w-6 fill-black" />
            </button>
            <motion.div
              transition={{ duration: 0.17 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="absolute left-0 top-20 w-full rounded-b-2xl bg-gray-200 py-8"
            >
              <input
                type="text"
                ref={inputRef}
                placeholder="Search here..."
                className="mx-auto block w-full max-w-sm rounded-lg px-3 py-4 text-black outline-none"
              />
            </motion.div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {!isSearchOpen ? (
        <button onClick={() => setIsSearchOpen(true)}>
          <SearchIcon />
        </button>
      ) : (
        <div className="relative">
          <input
            placeholder="Search here..."
            ref={inputRef}
            className="w-full rounded-lg border px-4 py-1 text-sm outline-none"
            type="text"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-2 top-2"
          >
            <CrossIcon className="h-4 w-4 fill-black" />
          </button>
        </div>
      )}
    </div>
  );
}
