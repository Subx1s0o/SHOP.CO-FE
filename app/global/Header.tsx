"use client";

import CrossIcon from "@/public/icons/cross.svg";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  user: boolean;
};

export default function Header({ user }: HeaderProps) {
  const [open, setOpen] = useState(true);

  return (
    <>
      {!user && (
        <div
          className={`bg-black flex justify-center py-2 ${
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
            <CrossIcon />
          </button>
        </div>
      )}
      <header>header</header>
    </>
  );
}
