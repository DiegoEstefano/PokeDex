import './App.css'
import { useState, useEffect } from 'react'

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

 console.log(loading)

  return (
    <div className='main'>
      <h1>Pokedex</h1>
      {!loading && <h1>Carregando...</h1>}
     <ul>
       {pokemon.length == 700  && pokemon.map((poke, i) => (
        <section>
          <li key={i}>{poke.name}
          <img src={poke.sprites.front_default} alt="" />
          <a>{poke.id}</a>
          </li>
        </section>
       ))}  
  
     </ul>

    </div>
  )
}

export default App
