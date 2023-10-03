import { useState } from "react";
import { SearchBox, SearchBoxButton, SearchBoxInput, SearchImage } from "./styled";

export const Search = () => {
    const [movieTitle, setMovieTitle] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <SearchBox onSubmit={onFormSubmit}>
            <SearchBoxButton>
                <SearchImage />
            </SearchBoxButton>
            <SearchBoxInput
                value={movieTitle}
                onChange={event => setMovieTitle(event.target.value)}
                placeholder="Search for movies..."
            />
        </SearchBox>
    )
};