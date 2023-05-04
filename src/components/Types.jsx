import '../components/Types.css'
export default function Types({ types }) {
    const handleTypes = () => {
        if (types[1]) {
            return <section className='types'>
                <div className={types[0].type.name}>{types[0].type.name}</div>
                <div className={types[1].type.name}>{types[1].type.name}</div>
            </section>
        }
        return <section className='types'>
            <div className={types[0].type.name}>{types[0].type.name}</div>
        </section>
    }
    return (handleTypes())
}
