import Image from "next/image";
import product from "public/product.png";

export default function Home() {
  return (
    <main className="flex h-screen w-full justify-center">
      <figure className="flex items-center justify-center">
        <Image src={product} alt="" />
      </figure>
      <div className="flex flex-col justify-center">
        <p className=" font-lato text-xs font-light uppercase">código: 42404</p>
        <p className="font-crimsonPro text-3xl my-2">Sofá Margot II - Rosé</p>
        <p className="font-lato text-base font-normal">R$ 4.000 </p>
        <button className="items-center rounded-3xl border-2 border-light_purple px-4 py-2 uppercase mt-2">
          adicionar à cesta
        </button>
      </div>
    </main>
  );
}
