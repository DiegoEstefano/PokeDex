import { useEffect, useState } from "react"
import axios from "axios"

// export default function useFetch(url) {
//     const [pokemon, setPokemon] = useState([])
//     const [loading, setLoading] = useState(null)
//     useEffect(() => {
//         async function getPokemons() {
//             setLoading(false)
//             const res = await fetch(url)
//             const data = await res.json()
//             const promises = data.results.map(result => fetch(result.url))
//             const responses = await Promise.allSettled(promises)
//             const pokePromises = responses.map(url => url.value.json())
//             const poke = await Promise.all(pokePromises)
//             setPokemon(poke)
//             setLoading(true)
//         }
//         getPokemons()
//     }, []) 
//     return { pokemon, loading }
// }

export default function useFetch(url) {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        if (pokemon) {
            axios.get(url)
                .then((response) => setPokemon(response.data))
        }
    }, [url])
    return { pokemon }
}
