import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div>
    <section className="seccion">
      <div className="imagen">
        <Image src="/pokemonfondo.jpg" width={1920} height={1080} alt="imagen" className="imagen" />
      </div>
      <div className="texto">
        <h2>Pokemon</h2>
        <h3>La mejor web de pokemon</h3>
        <p>En esta página podes encontrar tus pokemon favoritos, ver sus estadísticas, habilidades y mucho más. 
        <br></br>
        Además, podrás ver sus evoluciones y aprender sobre sus tipos.
        </p>
        
      </div>
    </section>

    <section className="seccion-2">
  <h2 className="titulo">Habilidades</h2>

  <p className="subtitulo">Estas son las principales habilidades de los pokemon</p>

  <div className="cards">
    <div className="card">
      <h3 className="card-titulo">Fuego</h3>
      <p className="card-texto">Las habilidades de fuego son fuertes contra los pokemon tipo planta</p> 
    </div>
    <div className="card">
      <h3 className="card-titulo">Agua</h3>
      <p className="card-texto">Las habilidades de agua son fuertes contra los pokemon tipo fuego</p>
    </div>
    <div className="card">
      <h3 className="card-titulo">Planta</h3>
      <p className="card-texto">Las habilidades de planta son fuertes contra los pokemon tipo agua</p>
    </div>
  </div>
</section>
   </div>


  
  );
}
