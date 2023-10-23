import { useState } from "react";
import { SearchBox, SearchBoxButton, SearchBoxInput, SearchImage } from "./styled";
import { useReplacePageParameter } from "../../pageParameters";
import { useLocation } from "react-router-dom";

export const Search = () => {
    const location = useLocation();
    const [query, setQuery] = useState("");
    const replacePageParameter = useReplacePageParameter();
    const searchText = location.pathname.includes("movie") ? "movies" : "people";

    const onFormSubmit = (event) => {
        event.preventDefault();
        replacePageParameter([
            {
                key: "search",
                value: query,
            },
            {
                key: "page",
                value: 1,
            }
        ]);
    };

    return (
        <SearchBox onSubmit={onFormSubmit}>
            <SearchBoxButton>
                <SearchImage />
            </SearchBoxButton>
            <SearchBoxInput
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                placeholder={`Search for ${searchText}...`}
            />
        </SearchBox>
    )
};