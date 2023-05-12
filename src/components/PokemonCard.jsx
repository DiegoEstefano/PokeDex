import '../components/PokemonCard.css'
import Types from './Types'
import { Link, useNavigate, NavLink } from 'react-router-dom';

export default function PokemonCard({ name, id, img, types }) {
    const navigate = useNavigate()
    // função para impressão de tipos
    return (
        <ul>
            {<li className={types[0].type.name}>
                <section>
                    <NavLink to={`/details?id=${id}`} >
                        <p>{name.toUpperCase()}</p>
                    </NavLink>
                    <span>#{id < 10 ? `0${id}` : id} </span>
                    <Types types={types} />
                </section>
                <div>
                    <img src={img} alt={name} />
                </div>
            </li>}
        </ul>
    )
}
