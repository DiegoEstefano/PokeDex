import '../components/PokemonCard.css'
export default function PokemonCard({ name, id, img }) {
    return (
        <ul>
            <li>
                <img src={img} alt={name} />
                <section>
                    <spam>#{id < 10 ? `0${id}` : id + 2}</spam>
                    <p>{name.toUpperCase()}</p>
                </section>

            </li>
        </ul>

    )
}
