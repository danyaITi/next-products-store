import {create} from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { ProductFavorite } from '../../../types/types';

interface FavoriteState {
    favorites:ProductFavorite[]
	addFavorite: (item:ProductFavorite) => void
}

const useFavoriteStore = create<FavoriteState>()(
    devtools(persist(
        (set) => ({
            favorites: [],
            addFavorite: (item:ProductFavorite) => set((state) => (
                {
                    favorites: [
                        ...state.favorites, 
                        {...item},
                        
                    ]
                    
                }
            )),
        }),
        {
            name: "favorites",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
))

export default useFavoriteStore