import BlackButton from "./ui/BlackButton";

export default function Home() {
  return (
    <>
      <section className="bg-slate-100 pt-10">
        <div className="my-container  ">
          <div className="max-w-xl mx-auto mb-6 ">
            <h1 className="text-black text-xxxl font-archivo font-bold mb-5 ">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-600 text-sm ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <BlackButton className="w-full">Shop Now</BlackButton>
        </div>
      </section>
    </>
  );
}
