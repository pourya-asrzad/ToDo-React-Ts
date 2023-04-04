import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Styles from "./card.module.scss";

const SkeletonComponent = () => {
    return <>
        {/* For variant="text", adjust the height via font-size */}
        <div className={Styles['skeleton']}>
            <div className={Styles['header']}>
                <Skeleton className={Styles['header-skeleton']} variant="text" sx={{ fontSize: '2rem' }} />
                <div className={Styles['emptydiv']}></div>
            </div>
            <Skeleton variant="text" sx={{ fontSize: '5rem' }} />
        </div>


    </>
}
export default SkeletonComponent

