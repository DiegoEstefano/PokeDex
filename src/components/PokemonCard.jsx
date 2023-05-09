import '../components/PokemonCard.css'
import Types from './Types'
export default function PokemonCard({ name, id, img, types }) {
    // função para impressão de tipos
    return (
        <ul>
            {<li className={types[0].type.name}>
                <img src={img} alt={name} />
                <section>
                    <span>#{id < 10 ? `0${id}` : id}</span>
                    <p>{name.toUpperCase()}</p>
                </section>
                <Types types={types} />
            </li>}
        </ul>
    )
}
