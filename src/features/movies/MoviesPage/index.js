import { MoviesTiles } from "./MoviesTiles";
import { Heading } from "../../../common/Heading";
import {
    Main,
} from "./styled";

export const MoviesPage = () => (
    <Main>
        <Heading
            title="Popular movies"
        />
        <MoviesTiles />
    </Main>
);