import '../components/Nav.css'
import pokedex from '../../public/assets/pokedex.png'
import { useState } from 'react';

export default function Nav() {

    const [search, setSearch] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)
        if(!search) return
        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <div className='nav'>
            <img className='logo' src={pokedex} alt="logo pokemon" />
            <form className='formulario' onSubmit={handleSubmit}>
                <label>
                    <input className='pesquisa' type="text" name='pesquisa' placeholder='Digite sua busca' onChange={(e) => setSearch(e.target.value)}/>
                </label>
                <input className='procurar' type="submit" value="Procurar" />
            </form>
        </div>
    )
}
