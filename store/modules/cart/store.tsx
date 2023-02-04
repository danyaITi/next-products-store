import { create } from 'zustand';
import { ProductCart } from '../../../types/types';
import { persist, createJSONStorage, devtools } from "zustand/middleware";

interface CartState {
    goods:ProductCart[] | []
	addProduct: (item:ProductCart) => void
}

const useCartStore = create<CartState>()(
	devtools(persist(
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
))


export default useCartStore

