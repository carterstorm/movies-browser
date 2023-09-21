import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import start from "../../../../assets/svg/star.svg";
import { selectPopularMovies, fetchPopularMovies } from "../moviesSlice";

import {
    Description,
    Info,
    Name,
    Poster,
    Rating,
    StarImage,
    Tag,
    TagName,
    Tags,
    Tile,
    TileLink,
    Tiles,
    TilesSection,
    Vote,
    VoteAverage,
    VoteCount,
    Year
} from "./styled";

export const MoviesTiles = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(selectPopularMovies);
    const posterImageLink = `https://image.tmdb.org/t/p/w342`;

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch])

    return (
        <TilesSection>
            <Tiles>
                {popularMovies.map(({ id, title, poster_path, release_date, vote_average, vote_count }) => (
                    <Tile key={id}>
                        <TileLink to="#">
                            <Poster
                                src={`${posterImageLink}${poster_path}`}
                                alt={`Poster: ${title}`}
                            />
                            <Description>
                                <Info>
                                    <Name>
                                        {title}
                                    </Name>
                                    <Year>
                                        {release_date}
                                    </Year>
                                </Info>
                                <Tags>
                                    <Tag>
                                        <TagName>Action</TagName>
                                    </Tag>
                                    <Tag>
                                        <TagName>Adventure</TagName>
                                    </Tag>
                                    <Tag>
                                        <TagName>Drama</TagName>
                                    </Tag>
                                </Tags>
                            </Description>
                            <Rating>
                                <StarImage
                                    src={start}
                                    alt="star"
                                />
                                <Vote>
                                    <VoteAverage>
                                        {vote_average}
                                    </VoteAverage>
                                    <VoteCount>
                                        {vote_count} votes
                                    </VoteCount>
                                </Vote>
                            </Rating>
                        </TileLink>
                    </Tile>
                ))}
            </Tiles>
        </TilesSection>
    );
};