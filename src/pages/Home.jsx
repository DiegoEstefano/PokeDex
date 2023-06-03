import '../App.css'
import './Home.css'
import axios from 'axios'

// importação de componentes
import PokemonCard from '../components/PokemonCard'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import Nav from '../components/Nav'
import { useEffect, useState } from 'react'

const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`

export default function Home() {
  const [pokeDetails, setPokeDetails] = useState(null)
  const { pokemon } = useFetch(url);
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    setLoading(false)
    if (pokemon.results) {
      Promise.all(
        pokemon.results.map((item) => (
          axios.get(item.url).then((response) => response.data))
        )
      ).then((data) => setPokeDetails(data))
      setLoading(true)
    }
  }, [pokemon])

  return (
    <>
      <Nav />
      <div className='cards'>
        {!loading && <Loading />}
        {pokeDetails && pokeDetails.map((poke, i) => (
          <PokemonCard key={i} name={poke.name}
            id={poke.id}
            img={poke.sprites.other['official-artwork'].front_default}
            types={poke.types} />
        ))}
      </div>
    </>
  )
}