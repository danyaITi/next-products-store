import { ProductCart } from "../types/types";
import  useCartStore  from "../store/modules/cart/store";
import { useEffect, useState } from "react";
import Card from "../components/cart/Card";
import styles from '../styles/cart.module.scss'

const Cart:React.FC = () => {
    const goods = useCartStore((state) => state.goods);
    const [items, setItems] = useState<ProductCart[]>([]);

    useEffect(()=>{
        setItems(goods);
    },[goods])

    return(
        <>
            <h1 className={styles.titlePage}>Корзина</h1>
            {!items.length && <h1>Корзина пуста</h1>}
            
            {items.map((item:ProductCart)=>(
               <Card key={item.id} data={item}/>
            ))}
        </>
    )
}

export default Cart