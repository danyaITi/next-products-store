import { GetStaticProps } from "next";
import Card from "../components/card";
import Header from "../components/header";
import { Goods } from "../types/types";

interface ResponseTypeProps {
    goods: Goods[]
}

export const getStaticProps: GetStaticProps = async () => {
    const resp = await fetch('https://fakestoreapi.com/products', {
        next: {
            revalidate:60
        }
    });
    const data:Goods[] = await resp.json();

    if(!data.length){
        return {
            notFound: true,
        }
    }
    
    return {
        props: {goods: data}
    }
}


const Main:React.FC<ResponseTypeProps> =  ({goods}) => {

    return(
        <>
            <div className='goods-grid'>
                {goods.map((item)=>(
                    <div className='goods-flex' key={item.id}>
                        <Card {...item}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Main