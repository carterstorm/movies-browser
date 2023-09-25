import { SearchBox, SearchBoxButton, SearchBoxInput, SearchImage } from "./styled";

export const Search = () => (
    <SearchBox>
        <SearchBoxButton>
            <SearchImage />
        </SearchBoxButton>
        <SearchBoxInput
            placeholder="Search for movies..."
        />
    </SearchBox>
);