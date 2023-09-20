import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    fetchPopularMovies,
} from "./moviesSlice";
import {
    Main,
    Heading,
    Tiles,
    Tile,
    TileLink,
    Poster,
    Description,
    Info,
    Name,
    Year,
    Tags,
    Tag,
    TagName,
    Rating,
    StarImage,
    Vote,
    VoteAverage,
    VoteCount
} from "./styled";

export const MoviesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch])

    return (
        <Main>
            <Heading>Popular movies</Heading>
            <Tiles>
                <Tile>
                    <TileLink>
                        <Poster />
                        <Description>
                            <Info>
                                <Name>

                                </Name>
                                <Year></Year>
                            </Info>
                            <Tags>
                                <Tag>
                                    <TagName></TagName>
                                </Tag>
                            </Tags>
                        </Description>
                        <Rating>
                            <StarImage />
                            <Vote>
                                <VoteAverage>

                                </VoteAverage>
                                <VoteCount></VoteCount>
                            </Vote>
                        </Rating>
                    </TileLink>
                </Tile>
            </Tiles>
        </Main>
    );
};