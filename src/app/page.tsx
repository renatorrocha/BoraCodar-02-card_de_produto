"use client";
import Image from "next/image";
import product from "public/product.png";
import icon from "public/iconGif.svg";
import gif from "public/couchAnimated.gif";
import { useState } from "react";

export default function Home() {
  const [animated, setAnimated] = useState(true);

  return (
    <main className="flex h-screen w-full justify-center">
      <figure className="flex flex-col items-center justify-center">
        <section className="relative">
          <Image
            src={animated ? product : gif}
            alt=""
            priority
            className="h-64 w-96"
          />
          <button
            className="absolute right-5 top-2 hover:-translate-y-1 transition-all duration-300"
            onClick={() => setAnimated(!animated)}
          >
            <Image src={icon} alt="" />
          </button>
        </section>
      </figure>
      <div className="flex flex-col justify-center">
        <p className=" font-lato text-xs font-light uppercase">código: 42404</p>
        <p className="my-2 font-crimsonPro text-3xl">Sofá Margot II - Rosé</p>
        <p className="font-lato text-base font-normal">R$ 4.000 </p>
        <button className="mt-2 items-center rounded-3xl border-2 border-light_purple px-4 py-2 uppercase hover:bg-gray-200 transition-all duration-300">
          adicionar à cesta
        </button>
      </div>
    </main>
  );
}
