import Image from "next/image"
import { ProductCart } from "../../types/types"
import styles from '../../styles/cart.module.scss'
import { converter } from "../../utils/converter"

interface CardProps {
    data:ProductCart
}

const Card:React.FC<CardProps> = ({data}) => {
    return (
        <>
            <div className={styles.card}>
                <Image src={data.image} alt='' width={100} height={100}/>
                <span>{data.title}</span>
                <span>{converter(data.price)} &#8381;</span>
            </div>
            <p className={styles.desc}>{data.description}</p>
        </>
    )
}   

export default Card