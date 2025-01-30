import { FiltersLayout } from "../ui/filters-layout";
import { useFilters } from "../model/filters.model";
import { categoryOptions } from "../constants";
import { UiTextField } from "@/shared/ui/form/ui-text-field";
import { UiSelectField } from "@/shared/ui/form/ui-select-field";

export function SuggestionsFilters() {
    const { data, updateQuery, updateCategory } =
        useFilters();

    return (
        <FiltersLayout>
            <UiTextField
                label="Поиск по названию/описанию"
                onChange={updateQuery}
                value={data.query}
            />
            <UiSelectField
                label="Фильтр по категории"
                idKey="id"
                labelKey="label"
                options={categoryOptions}
                value={data.category}
                onChange={updateCategory}
            />
        </FiltersLayout>
    );
}