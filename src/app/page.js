import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className="seccion">
      <div className="imagen">
        <Image src="/pokemon.jpg" width={1000} height={1000} alt="imagen" className="imagen" />
      </div>
      <div className="texto">
        <h2>Pokemon</h2>
        <p>La mejor web de pokemon</p>
        <p>En esta página podes encontrar tus pokemon favoritos</p>
      </div>
    </div>
  );
}
