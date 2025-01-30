import { createContext, useContext, useEffect, useState } from "react";
import { SuggestionEntity } from "./entities";

type FavoritesContextType = {
    favorites: SuggestionEntity[];
    toggleFavorite: (item: SuggestionEntity) => void;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<SuggestionEntity[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedFavorites = localStorage.getItem("favorites");
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (favorites.length > 0) {
                localStorage.setItem("favorites", JSON.stringify(favorites));
            }
        }
    }, [favorites]);

    const toggleFavorite = (item: SuggestionEntity) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some((fav) => fav.id === item.id);
            if (isFavorite) {
                return prevFavorites.filter((fav) => fav.id !== item.id);
            } else {
                return [...prevFavorites, item];
            }
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error("FavoritesContext not provided");
    return context;
}
