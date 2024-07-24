"use client";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickAway(menuRef, () => setIsMenuOpen(false));

  useEffect(() => {
    if (isMenuOpen) {
      setIsSearchOpen(false);
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-white">
      <div className="my-container">
        <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-6">
          <DesktopMenu />
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            menuRef={menuRef}
          />
          <SearchBar
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
            inputRef={inputRef}
          />
        </div>
      </div>
    </header>
  );
}
