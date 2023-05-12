import '../components/PokemonCard.css'
import Types from './Types'
import { Link, useNavigate,NavLink } from 'react-router-dom';

export default function PokemonCard({ name, id, img, types }) {
    const navigate = useNavigate()
    // função para impressão de tipos
    return (
        <ul>
            {<li className={types[0].type.name}>
                <img src={img} alt={name} />
                <section>
                    <span>#{id < 10 ? `0${id}` : id} {id > 100 && `${id}`}</span>
                    <NavLink to={`/details?id=${id}`} >
                        <p>{name.toUpperCase()}</p>
                    </NavLink>
                </section>
                <Types types={types} />
            </li>}
        </ul>
    )
}
