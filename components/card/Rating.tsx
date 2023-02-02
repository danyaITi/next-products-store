import Image from "next/image";
import styles from '../../styles/card.module.scss';

interface RatingProps {
    rate:number
    count:number
}

const Rating:React.FC<RatingProps> = ({rate,count}) => {
    return(
        <div className={styles.rating}>
            {[...new Array(Math.round(rate))]
            .map((_, i) => (
                <Image 
                    key={i} 
                    src={'/rate.png'} 
                    style={{margin:0}} 
                    width={14} 
                    height={14} 
                    alt=''
                />
            ))}
            <small>{count} отзыва</small>
        </div>
    )
}

export default Rating