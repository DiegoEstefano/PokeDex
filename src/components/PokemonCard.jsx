import '../components/PokemonCard.css'
import Types from './Types'
import { Link, useNavigate, NavLink } from 'react-router-dom';

export default function PokemonCard({ name, id, img, types }) {
    const navigate = useNavigate()
    // função para impressão de tipos
    return (
        <ul>
            {<NavLink to={`/details?id=${id}`} >
                <li className={types[0].type.name}>
                    <section>
                        <p>{name.toUpperCase()}</p>
                        <span>#{id < 10 ? `0${id}` : id} </span>
                        <Types types={types} />
                    </section>
                    <div>
                        <img src={img} alt={name} />
                    </div>
                </li>
            </NavLink>
            }
        </ul>
    )
}
