'use client'

import { useEffect, useState } from "react";
import Card from "../components/favorites/Card";
import useFavoriteStore from "../store/modules/favorite/store";
import { ProductFavorite } from "../types/types";
import styles from '../styles/favorites.module.scss'

const Favorite:React.FC = () => {
    const favorites = useFavoriteStore((state) => state.favorites);
    const [items, setItems] = useState<ProductFavorite[]>([]);

    useEffect(() => {  
        setItems(favorites);
    }, [favorites])
  

    return(
        <>
            <h1 className={styles.titlePage}>Избранное</h1>
            {!items.length && <h1>Нет избранных</h1>}
            
            {items.map((item)=>(
                <Card key={item.id} data={item}/>
            ))}
        </>
    )
}

export default Favorite