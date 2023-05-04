import '../components/PokemonCard.css'
import Types from './Types'
export default function PokemonCard({ name, id, img, types }) {
    // função para impressão de tipos
    return (
        <ul>
            <li>
                <img src={img} alt={name} />
                <section>
                    <span>#{id < 10 ? `0${id}` : id + 2}</span>
                    <p>{name.toUpperCase()}</p>
                </section>
                <Types types={types} />
            </li>
        </ul>
    )
}
