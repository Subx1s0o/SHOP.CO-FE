"use client";
import Link from "next/link";

export default function DesktopMenu() {
  return (
    <div className="items-center gap-10 xs:hidden md:flex">
      <Link className="font-archivo-black text-xl font-extrabold" href="/">
        SHOP.CO
      </Link>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/sale">On Sale</Link>
          </li>
          <li>
            <Link href="#new-arrivals">New Arrivals</Link>
          </li>
          <li>
            <Link href="#brands">Brands</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
