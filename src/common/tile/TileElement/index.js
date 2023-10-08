import { GenreTags } from "./GenreTags";
import { Info } from "./Info";
import { Rating } from "../../Rating";
import no_movie_image from "../../../assets/svg/no_movie_image.svg";
import {
    Container,
    Description,
    Details,
    Overview,
    OverviewDesktopContainer,
    OverviewMobileContainer,
    Poster,
    TileElement,
    TileLink
} from "./styled";

export const Tile = ({
    page,
    id,
    genre_ids,
    title,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    original_language,
    runtime,
    budget,
    production_countries,
    overview,
}) => {
    const posterImageLink = `https://image.tmdb.org/t/p/w342`;
    return (
        <TileElement
            key={id}
            as={page ? "div" : null}
            page={page}
        >
            <Container>
                <TileLink
                    as={page ? "div" : null}
                    page={page}
                    to={!page ? `/movies/movie/${id}` : null}
                >
                    <Poster
                        src={poster_path ? `${posterImageLink}${poster_path}` : no_movie_image}
                        alt={poster_path ? `Poster: ${title}` : "Image not found"}
                        page={page}
                    />
                    <Details page={page}>
                        <Description page={page}>
                            <Info
                                page={page}
                                title={title}
                                releaseDate={release_date}
                                original_language={original_language}
                                runtime={runtime}
                                budget={budget}
                                production_countries={production_countries}
                            />
                            <GenreTags genre={genre_ids} />
                        </Description>
                        <Rating
                            page={page}
                            vote_average={vote_average}
                            vote_count={vote_count}
                        />
                        {page ?
                            (
                                <OverviewDesktopContainer>
                                    <Overview>
                                        {overview}
                                    </Overview>
                                </OverviewDesktopContainer>)
                            :
                            null}
                    </Details>
                </TileLink>
                <OverviewMobileContainer>
                    {page ?
                        (<Overview mobile>
                            {overview}
                        </Overview>)
                        :
                        null}
                </OverviewMobileContainer>
            </Container>
        </TileElement>
    )
};