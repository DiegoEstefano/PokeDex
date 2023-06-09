import '../components/Nav.css'
import { CiSearch } from "react-icons/ci";
import pokedex from '../../public/assets/pokedex.png'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Nav() {

    const [search, setSearch] = useState("");

    const navigate = useNavigate()

    // Faz o redirecionamento utilizando o 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)
        if (!search) return
        navigate(`/search?q=${search.toLocaleLowerCase()}`)
        setSearch("")
    }
    return (
        <div className='nav'>
            <Link to="/">
                <img className='logo' src={pokedex} alt="logo pokemon" />
            </Link>
            <form className='formulario' onSubmit={handleSubmit}>
                <label>
                    <input className='pesquisa' type="text" name='pesquisa' placeholder='Digite sua busca' onChange={(e) => setSearch(e.target.value)} value={search} />
                </label>
                <button className='procurar' type="submit">
                    <CiSearch className='foto' />
                </button>
            </form>
        </div>
    )
}
