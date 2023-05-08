import '../App.css'
import './Home.css'

// importação de componentes
import PokemonCard from '../components/PokemonCard'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'

const url = "https://pokeapi.co/api/v2/pokemon?limit=650&offset=0"

export default function Home() {

    const { pokemon, loading } = useFetch(url);

  return (
     <div className='cards'>
        {!loading && <Loading />}
        {pokemon && pokemon.map((poke, i) => (
          <PokemonCard name={poke.name}
            id={poke.id}
            img={poke.sprites.other.dream_world.front_default}
            types={poke.types} />
        ))}
      </div>
  )
}
