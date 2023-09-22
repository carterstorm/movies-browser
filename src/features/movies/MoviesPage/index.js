import { MoviesTiles } from "./MoviesTiles";
import { Heading } from "../../../common/Heading";
import {
    Main,
} from "./styled";
import { Pagination } from "../../../common/Pagination";

export const MoviesPage = () => (
    <Main>
        <Heading
            title="Popular movies"
        />
        <MoviesTiles />
        <Pagination />
    </Main>
);