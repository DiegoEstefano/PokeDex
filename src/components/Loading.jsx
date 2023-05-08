import { CircularProgress } from '@mui/material'
import Stack from '@mui/material/Stack';
export default function Loading({ progress }) {
    return (
        <div className='loading'>
                <CircularProgress  color='warning'  size="80px"  />
        </div>
    )
}
