import { create } from 'zustand';
import { ProductCart } from '../../../types/types';
import { persist, createJSONStorage } from "zustand/middleware";

interface CartState {
    goods:ProductCart[] | []
	addProduct: (item:ProductCart) => void
}

const useCartStore = create<CartState>()(
	persist(
		(set) => ({
			goods: [],
			addProduct: (item:ProductCart) => set((state) => (
				{
					goods: [
						...state.goods, 
						{...item}
					]
					
				}
			)),
		}),
		{
            name: "cart",
            storage: createJSONStorage(() => sessionStorage),
        }
	)
)


export default useCartStore

