export type CategoryId = number;

export type CategoryEntity = {
    id: number;
    label: string;
};

export type SuggestionEntity = {
    id: number;
    title: string;
    image: string;
    category: CategoryEntity;
    price: string;
};