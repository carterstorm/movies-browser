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
    console.log(popularMovies);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch])

    return (
        <TilesSection>
            <Tiles>
                {popularMovies.map(({ id, title, release_date, vote_average, vote_count }) => (
                    <Tile key={id}>
                        <TileLink to="#">
                            <Poster />
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