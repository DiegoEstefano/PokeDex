import '../components/PokemonCard.css'
export default function PokemonCard({name, id, img}) {
    return (
        <ul>
            <li>
                <img src={img} alt={name} />
                <p>{name}</p>
                <p>{id}</p>
            </li>
        </ul>
    )
}
