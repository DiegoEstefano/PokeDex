export default function Types({ types }) {
    const handleTypes = () => {
        if (types[1]) {
            return <section className='types'>
                <div className='type'>{types[0].type.name}</div>
                <div className='type'>{types[1].type.name}</div>
            </section>
        }
        return <section className='types'>
            <div className='type'>{types[0].type.name}</div>
        </section>
    }
    return (handleTypes())
}
