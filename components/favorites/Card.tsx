import Image from "next/image"
import { ProductFavorite } from "../../types/types"
import styles from '../../styles/favorites.module.scss'
import { converter } from "../../utils/converter"

interface CardProps {
    data:ProductFavorite
}

const Card:React.FC<CardProps> = ({data}) => {
    return (
        <div className={styles.card}>
            <Image src={data.image} alt='' width={100} height={100}/>
            <span>{data.title}</span>
            <span>{converter(data.price)} &#8381;</span>
        </div>
    )
}   

export default Card