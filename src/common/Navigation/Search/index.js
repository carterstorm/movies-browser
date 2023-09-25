import { SearchBox, SearchBoxButton, SearchBoxInput } from "./styled";

export const Search = () => (
    <SearchBox>
        <SearchBoxButton />
        <SearchBoxInput
            placeholder="Search for movies..."
        />
    </SearchBox>
);