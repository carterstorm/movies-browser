import { Rating } from "../../../../common/Rating";
import {
    MovieDetails,
    MovieDetailsInfo,
    MovieImage,
    MovieImageContainer,
    MovieTitle,
    Wrapper
} from "./styled";

export const MovieHeroSection = ({
    backdrop_path,
    title,
    vote_average,
    vote_count
}) => {
    return (
        <Wrapper>
            <MovieImageContainer>
                <MovieDetails>
                    <MovieDetailsInfo>
                        <MovieTitle>
                            {title}
                        </MovieTitle>
                        <Rating
                            moviePage
                            vote_average={vote_average}
                            vote_count={vote_count}
                        />
                    </MovieDetailsInfo>
                </MovieDetails>
                <MovieImage
                    src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                />
            </MovieImageContainer>
        </Wrapper>
    )
};