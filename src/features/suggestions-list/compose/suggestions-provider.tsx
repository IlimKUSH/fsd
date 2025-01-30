import { ReactNode } from "react";
import { FiltersDataProvider } from "../model/filters.model";
import { FavoritesProvider } from "../model/favorites.model";

export function SuggestionsProvider({ children }: { children: ReactNode }) {
    return <FavoritesProvider>
        <FiltersDataProvider>{children}</FiltersDataProvider>
    </FavoritesProvider>;
}