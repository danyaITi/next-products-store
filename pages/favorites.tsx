import { useEffect, useState } from "react";
import useFavoriteStore from "../store/modules/favorite/store";
import { ProductFavorite } from "../types/types";

const Favorite:React.FC = () => {
    const favorites = useFavoriteStore((state) => state.favorites);
    const [items, setItems] = useState<ProductFavorite[]>([]);

    useEffect(() => {  
        setItems(favorites);  
    }, [favorites])
 

    return(
        <>
            <h1>Избранное</h1>
            {!items.length && <h1>Нет избранных</h1>}
            
            {items.map((item)=>(
                <div>{item.title}</div>
            ))}
        </>
    )
}

export default Favorite