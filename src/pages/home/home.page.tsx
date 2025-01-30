import {
    SuggestionsFilters,
    SuggestionsList,
    SuggestionsProvider,
} from "@/features/suggestions-list";
import { Layout } from "./ui/layout";
import { MainPageInfo } from "./ui/main-page-info";

export function HomePage() {
    return (
        <SuggestionsProvider>
            <Layout
                mainPageInfo={<MainPageInfo />}
                mainContent={<SuggestionsList />}
                sidebar={<SuggestionsFilters />}
            />
        </SuggestionsProvider>
    );
}