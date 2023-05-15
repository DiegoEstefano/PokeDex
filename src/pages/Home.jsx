import '../App.css'
import './Home.css'

// importação de componentes
import PokemonCard from '../components/PokemonCard'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import Nav from '../components/Nav'

const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`

export default function Home() {

  const { pokemon, loading } =  useFetch(url);

  return (
    <>
      <Nav />
      <div className='cards'>
        {!loading && <Loading />}
        {pokemon && pokemon.map((poke, i) => (
          <PokemonCard name={poke.name}
            id={poke.id}
            img={poke.sprites.other['official-artwork'].front_default}
            types={poke.types} />
        ))}
      </div>
    </>
  )
}