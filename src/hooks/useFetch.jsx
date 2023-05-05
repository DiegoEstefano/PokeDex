import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(null)
    const [progress, setProgress] = useState(null)
    
    useEffect(() => {
        async function getPokemons() {
            setLoading(false)
            setProgress(10)
            const res = await fetch(url)
            setProgress(30)
            const data = await res.json()
            setProgress(40)
            const promises = data.results.map(result => fetch(result.url))
            setProgress(50)
            const responses = await Promise.allSettled(promises)
            setProgress(70)
            const pokePromises = responses.map(url => url.value.json())
            setProgress(85)
            setProgress(90)
            const poke = await Promise.all(pokePromises)
            setProgress(100)
            setPokemon(poke)
            setLoading(true)
        }
        getPokemons()
    }, [])
    return { pokemon, loading, progress }
}
