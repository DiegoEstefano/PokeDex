import './App.css'
import { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard'


const url = "https://pokeapi.co/api/v2/pokemon?limit=700&offset=0"

function App() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    async function getPokemons() {
      setLoading(false)
      const res = await fetch(url)
      const data = await res.json()
      const promises = data.results.map(result => fetch(result.url))
      const responses = await Promise.allSettled(promises)
      const pokePromises = responses.map(url => url.value.json())
      const poke = await Promise.all(pokePromises)
      setPokemon(poke)
      setLoading(true)
    }
    getPokemons()
  }, [])

  console.log(pokemon)

  return (
    <div className='main'>
      <h1>Pokedex</h1>
      <div className='cards'>
        {!loading && <h1>Carregando...</h1>}
        {pokemon && pokemon.map((poke, i) => (
          <PokemonCard name={poke.name} id={poke.id} img={poke.sprites.other.home.front_default} />
        ))}
      </div>
    </div>
  )
}


export default App

