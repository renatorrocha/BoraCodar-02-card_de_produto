import Image from "next/image";
import product from "public/product.png";

export default function Home() {
  return (
    <main>
      <figure>
        <Image src={product} alt="" />
      </figure>
      <div>
        <p className=" font-lato text-xs font-light uppercase">código: 42404</p>
        <p className="font-crimsonPro">Sofá Margot II - Rosé</p>
        <p className="font-lato">R$ 4.000 </p>
        <button className="uppercase">adicionar à cesta</button>
      </div>
    </main>
  );
}
