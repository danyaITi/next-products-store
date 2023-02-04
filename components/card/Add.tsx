import styles from '../../styles/card.module.scss';
import Image from "next/image";
import { ProductCart } from '../../types/types';
import  useCartStore  from '../../store/modules/cart/store';
import useFavoriteStore from '../../store/modules/favorite/store';
import { useState } from 'react';

interface AddProps {
    data: ProductCart
}
 
const Add:React.FC<AddProps> = ({data}) => {
    const addProduct = useCartStore((state) => state.addProduct);
    const addFavorite = useFavoriteStore((state) => state.addFavorite);

    const [cartAdded, setCartAdded] = useState(false);
    const [favAdded, setFavAdded] = useState(false);

    const obj = {
        id: data.id,
        description: data.description,
        image: data.image,
        price: data.price,
        title: data.title
    };

    const addToCart = () => {
        addProduct(obj);
        setCartAdded(true);
    };

    const addToFavorite = () => {
        addFavorite(obj);
        setFavAdded(true);
    };

    return(
        <div className={styles.add}>
            <div>
                <button 
                    className={cartAdded ? styles.added : styles.toCart} 
                    onClick={addToCart}
                >
                    {cartAdded ? 'В корзине' : 'В корзину'}
                </button>

                <div className={styles.counter}>
                    <b>-</b>

                    <span>1</span>

                    <b>+</b>
                </div>
            </div>

            {favAdded
            ? <Image onClick={addToFavorite} priority src='/favAdded.png' width={40} height={40} alt='added'/>
            :  <Image onClick={addToFavorite} src='/icon.png' width={16} height={14} alt='to favorites'/>
            }

            
        </div>
    )
}

export default Add