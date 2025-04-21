'use client';
import Image from "next/image";
import { useState, useEffect} from "react";


export default function Home() {

  const [listaPokemon, setListaPokemon] = useState([]);
  const [tipos, setTipos] = useState([]);


  const obtenerPokemons = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1300');
      const data = await res.json();
      const pokemonsRandom = [];
       
      const indices = Array.from({ length: 6 }, () => Math.floor(Math.random() * data.results.length));
      const promises = indices.map((i) => fetch(data.results[i].url).then((res) => res.json()));
      const details = await Promise.all(promises);

      for (const p of details) {
        pokemonsRandom.push({
          id: p.id,
          nombre: p.name,
          imagen: p.sprites.front_default,
          tipos: p.types.map((t) => t.type.name),
          habilidades: p.abilities.map((a) => a.ability.name),
        });
      }

      setListaPokemon(pokemonsRandom);
    } catch (err) {
      console.error(err);
    }
  };

  const obtenerTipos = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/type');
    const data = await res.json();
    setTipos(data.results);
  };


 
  useEffect(() => {
    obtenerPokemons();
    obtenerTipos();
  }, []);
  
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

<section className="seccion-3">
        <h2 className="titulo">Explorar Pokémon</h2>
        <p className="subtitulo">Filtrar por tipo</p>
        <div style={{ margin: '20px 0' }}>
          <select
            style={{ padding: '10px', borderRadius: '6px', minWidth: '200px' }}
          >
            <option value="">Seleccione el tipo</option>
            {tipos.map((tipo) => (
              <option key={tipo.name} value={tipo.name}>
                {tipo.name.charAt(0).toUpperCase() + tipo.name.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="cards">
          {listaPokemon.map((poke) => (
            <div key={poke.id} className="card">
              <img className="card-imagen" src={poke.imagen} alt={poke.nombre} style={{ width: '100px', height: '100px' }} />
              <div className="card-titulo">{poke.nombre.toUpperCase()}</div>
              <div className="card-texto">
                <strong>Tipo:</strong> {poke.tipos.join(', ')}
              </div>
              <div className="card-texto">
                <strong>Habilidades:</strong> {poke.habilidades.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </section>
   </div>


  
  );
}
