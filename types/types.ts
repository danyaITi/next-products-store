export type Goods = {
    id: string
    title: string
    price: number
    description: string
    image: string
    rating: { 
        rate:number
        count: number 
    }
};

export type ProductCart = Omit<Goods, 'rating'>;

export type ProductFavorite = Omit<Goods, 'rating' | 'description'>;


