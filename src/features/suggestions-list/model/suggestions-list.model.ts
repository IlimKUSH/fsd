import { SuggestionEntity } from "./entities";
import { useFilters } from "./filters.model";

export function useSuggestionsList() {
    const data: SuggestionEntity[] = [
        {
            id: 1,
            title: "Яблоки «Голден Делишес»",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Golden_delicious_apple.jpg/1200px-Golden_delicious_apple.jpg",
            price: "150 KGS/кг",
            category: { id: 1, label: "Фрукты" },
        },
        {
            id: 2,
            title: "Мёд натуральный цветочный",
            image: "https://www.dobryj-pasechnik.ru/images/photos/small/article1006.jpg",
            price: "800 KGS/кг",
            category: { id: 2, label: "Продукты питания" },
        },
    ];

    const { data: filtersData } = useFilters();

    let preparedData = data;

    preparedData = preparedData.filter((item) => {
        if (filtersData.category && filtersData.category !== item.category.id) {
            return false;
        }

        return true;
    });

    if (filtersData.query) {
        preparedData = preparedData.filter((item) =>
            item.title.toLowerCase().includes(filtersData.query.toLowerCase())
        );
    }

    return preparedData;
}