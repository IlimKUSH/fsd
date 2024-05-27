import { SuggestionEntity } from "./entities";
import { useFilters } from "./filters.model";

export function useSuggestionsList() {
    const data: SuggestionEntity[] = [
        {
            id: 1,
            createdAt: new Date(),
            description: "Description",
            title: "title 1",
            grade: 4,
            status: { id: 1, label: "Открыто" },
            tags: [{ id: 1, label: "Тег1" }],
        },
        {
            id: 2,
            createdAt: new Date(Date.now() - 100000000),
            description: "Description",
            title: "title 2",
            grade: 6,
            status: { id: 2, label: "Закрыто" },
            tags: [{ id: 2, label: "Тег2" }],
        },
    ];

    const { data: filtersData } = useFilters();

    console.log(filtersData)

    let preparedData = data;

    console.log(preparedData)

    preparedData = preparedData.filter((item) => {
        if (filtersData.status && filtersData.status !== item.status.id) {
            return false;
        }

        return true;
    });

    if (filtersData.query) {
        preparedData = preparedData.filter((item) =>
            item.title.toLowerCase().includes(filtersData.query.toLowerCase())
        );
    }

    if (filtersData.order === "createAt-desc") {
        preparedData.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    } else if (filtersData.order === "grade-desc") {
        preparedData.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    }

    return preparedData;
}