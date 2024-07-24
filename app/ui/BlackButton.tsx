import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string; // Use `string` instead of `String`
}

export default function BlackButton({ children, className }: IProps) {
  return (
    <button
      className={`${
        className ? className : ""
      } py-4 bg-black text-white rounded-full`}
    >
      {children}
    </button>
  );
}
