import { ProductCart } from "../types/types";
import  useCartStore  from "../store/modules/cart/store";
import { useEffect, useState } from "react";

const Cart:React.FC = () => {
    const goods = useCartStore((state) => state.goods);
    const [items, setItems] = useState<ProductCart[]>([]);

    useEffect(()=>{
        setItems(goods);
    },[goods])

    return(
        <>
            <h1>Корзина</h1>
            {!items.length && <h1>Корзина пуста</h1>}
            
            {items.map((item:ProductCart)=>(
                <div key={item.id}>{item.title}</div>
            ))}
        </>
    )
}

export default Cart