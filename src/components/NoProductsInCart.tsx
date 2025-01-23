import Link from "next/link";

import useCartInfo from "@/hooks/useCartInfo";

export function NoProductsInCart() {
  const { cartInfo } = useCartInfo();

  return (
    <>
      {cartInfo.length === 0 ? (
        <section className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#D3D3D4">
              <path
                stroke-linecap="round"
                d="M8 12V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4"
              />
              <path d="M3.694 12.668c.145-1.741.218-2.611.792-3.14S5.934 9 7.681 9h8.639c1.746 0 2.62 0 3.194.528s.647 1.399.792 3.14l.514 6.166c.084 1.013.126 1.52-.17 1.843c-.298.323-.806.323-1.824.323H5.174c-1.017 0-1.526 0-1.823-.323s-.255-.83-.17-1.843z" />
            </g>
          </svg>
          <p className="text-base font-[600] text-neutral-500">
            No hay productos en el carrito
          </p>
          <button className="mt-8 rounded-lg bg-secondaryColor px-5 py-3 font-bold text-white transition duration-300 hover:bg-[#34383d]">
            <Link href={"/productos"}>VOLVER A LA TIENDA</Link>
          </button>
        </section>
      ) : null}
    </>
  );
}
