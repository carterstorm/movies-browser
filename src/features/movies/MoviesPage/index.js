import { useEffect } from "react";
import { useDispatch } from "react-redux";
import star from "../../../assets/svg/star.svg";

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
    VoteCount,
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
                    <TileLink to="#">
                        <Poster />
                        <Description>
                            <Info>
                                <Name>
                                    Mulan
                                </Name>
                                <Year>
                                    2020
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
                                src={star}
                                alt="star"
                            />
                            <Vote>
                                <VoteAverage>
                                    7,8
                                </VoteAverage>
                                <VoteCount>
                                    35 votes
                                </VoteCount>
                            </Vote>
                        </Rating>
                    </TileLink>
                </Tile>
            </Tiles>
        </Main>
    );
};