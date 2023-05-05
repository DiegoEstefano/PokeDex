import { CircularProgress } from '@mui/material'
import Stack from '@mui/material/Stack';
export default function Loading({ progress }) {
    return (
        <div className='loading'>
                <CircularProgress variant="determinate" color="warning" value={progress} size="80px" />
        </div>
    )
}
