import '../components/Types.css'
export default function Types({ types }) {
    const handleTypes = () => {
        if (types[1]) {
            return <div className='types'>
                <div  className={`tipo1 ${types[0].type.name}`}>{types[0].type.name}</div>
                <div className={`tipo2 ${types[1].type.name}`}>{types[1].type.name}</div>
            </div>
        }
        return <div  className='types'  >
            <div className={`tipo1 ${types[0].type.name}`}>{types[0].type.name}</div>
        </div>
    }
    return (handleTypes())
}