import {create} from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductFavorite } from '../../../types/types';

interface FavoriteState {
    goods:ProductFavorite[] | []
	addFavorite: (item:ProductFavorite) => void
}

const useFavoriteStore = create<FavoriteState>()(
    persist(
        (set) => ({
            goods: [],
            addFavorite: (item:ProductFavorite) => set((state) => (
                {
                    goods: [
                        ...state.goods, 
                        {...item}
                    ]
                    
                }
            )),
        }),
        {
            name: "favorites",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useFavoriteStore