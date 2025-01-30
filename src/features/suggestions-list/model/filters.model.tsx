import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useMemo,
    useState,
} from "react";
import { CategoryId } from "./entities";

export type SuggestionFiltersData = {
    query: string;
    category: CategoryId | undefined;
};

const filtersContext = createContext<{
    data: SuggestionFiltersData;
    setData: Dispatch<SetStateAction<SuggestionFiltersData>>;
} | null>(null);

export function FiltersDataProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<SuggestionFiltersData>({
        query: "",
        category: undefined,
    });
    return (
        <filtersContext.Provider value={useMemo(() => ({ data, setData }), [data])}>
            {children}
        </filtersContext.Provider>
    );
}

export function useFilters() {
    const contextValue = useContext(filtersContext);
    if (!contextValue) throw new Error("context not provided");

    const { data, setData } = contextValue;

    const updateQuery = (query: string) => {
        setData((d) => ({ ...d, query }));
    };
    const updateCategory = (category: CategoryId | undefined) => {
        setData((d) => ({ ...d, category }));
    };

    return {
        data,
        updateCategory,
        updateQuery,
    };
}