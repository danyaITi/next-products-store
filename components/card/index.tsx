import Image from "next/image";
import styles from '../../styles/card.module.scss';
import { converter } from "../../utils/converter";
import Add from "./Add";
import Hit from "./Hit";
import Rating from "./Rating";

interface CardProps {
    id: string,
    title: string,
    price: number,
    description: string
    image: string,
    rating: { 
        rate:number, 
        count: number 
    }
}

const Card:React.FC<CardProps> = ({image,title,price, rating, description, id}) => {

    const {count} = rating;

    return(
        <div className={styles.card}>
            {count > 300 
                ? <Hit/> 
                : ''
            }

            <Image src={image} width={220} height={220} alt={title}/>

            <Rating {...rating}/>

            <span className={styles.title}>
                {title}
            </span>

            <div className={styles.price}>
                <span>
                    {converter(price)} &#8381; 
                </span>
                <small>/шт</small>
            </div>

            <Add data={{image,title,price,description, id}}/>
        </div>
    )
}

export default Card