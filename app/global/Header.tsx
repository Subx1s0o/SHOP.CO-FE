import Link from "next/link";

type HeaderProps = {
  user: Boolean;
};

export default function Header({ user }: HeaderProps) {
  return (
    <>
      {!user && (
        <div className="bg-black flex justify-center py-2">
          <p className="text-white">
            Sign up and get 20% off to your first order.{" "}
            <Link
              className="font-medium relative text-underline"
              href="sign-up"
            >
              Sign Up Now
            </Link>
          </p>
        </div>
      )}
      <header>header</header>
    </>
  );
}
