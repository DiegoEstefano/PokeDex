import './Search.css'
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Loading from '../components/Loading'
import PokemonCard from "../components/PokemonCard"
import Nav from '../components/Nav'
import useFetch from '../hooks/useFetch';


export default function Search() {

  // redirecionamento usando search params
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const [search, setSearch] = useState({})
  const url = `https://pokeapi.co/api/v2/pokemon/${query}`

  const { pokemon } = useFetch(url);

  useEffect(() => {
    if (pokemon.types) {
      setSearch(pokemon)
    }
  })

  return (
    <>
         <Nav />
      {search.types &&
        <>
         <h1>Resultados para: {query.toUpperCase()} </h1>
          <div className='cards'>
            {!search && <Loading />}
            {search.types &&
              <PokemonCard name={pokemon.name}
                id={search.id}
                img={search.sprites.other.dream_world.front_default}
                types={search.types} />
            }
          </div> 
        </>

      }  

    </>
  )

}
