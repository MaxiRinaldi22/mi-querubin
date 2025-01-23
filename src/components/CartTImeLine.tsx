import Link from "next/link";

export function CartTimeLine({ step }: { step: number }) {
  return (
    <div className="flex w-full items-center justify-center pb-4 md:gap-1 md:pb-6 md:pt-2">
      <Link href={`/cart`}>
        <h2
          className={`${step === 1 ? "text-primaryColor" : "text-black"} text-lg font-bold md:text-2xl`}
        >
          Carrito
        </h2>
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill={`${step === 2 ? "#000" : "#949494"}`}
      >
        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
      </svg>
      <Link href={`/checkout`}>
        <h2
          className={`${step === 2 ? "text-primaryColor" : "text-[#949494]"} text-lg font-bold md:text-2xl`}
        >
          Checkout
        </h2>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill={`${step === 3 ? "#000" : "#949494"}`}
      >
        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
      </svg>

      <h2
        className={`${step === 3 ? "text-primaryColor" : "text-[#949494]"} text-lg font-bold md:text-2xl`}
      >
        Finalizar Compra
      </h2>
    </div>
  );
}
