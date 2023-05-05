import '../components/Nav.css'
import pokedex from '../../public/assets/pokedex.png'

export default function Nav() {
    return (
        <div className='nav'>
            <img className='logo' src={pokedex} alt="logo pokemon" />
            <form className='formulario'>
                <label>
                    <input className='pesquisa' type="text" name='pesquisa' placeholder='Digite sua busca' />
                </label>
                <input className='procurar' type="submit" value="Procurar" />
                
            </form>
        </div>
    )
}
