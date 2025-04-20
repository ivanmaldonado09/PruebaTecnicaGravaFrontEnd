import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div>
    <section className="seccion">
      <div className="imagen">
        <Image src="/pokemon.jpg" width={1000} height={1000} alt="imagen" className="imagen" />
      </div>
      <div className="texto">
        <h2>Pokemon</h2>
        <h3>La mejor web de pokemon</h3>
        <p>En esta página podes encontrar tus pokemon favoritos, ver sus estadísticas, habilidades y mucho más. 
        <br></br>
        Además podrás ver sus evoluciones y como conseguirlos.
        </p>
        
      </div>
    </section>
   </div>


  
  );
}
