import { useSelector } from "react-redux";
import { Rating } from "../../../../common/Rating";
import { selectMovieDetailsList } from "../../../../movieDetailsSlice";
import {
    MovieDetails,
    MovieDetailsInfo,
    MovieImage,
    MovieImageContainer,
    MovieTitle,
    Wrapper
} from "./styled";

export const MovieHeroSection = () => {
    const {
        backdrop_path,
        title,
        vote_average,
        vote_count,
    } = useSelector(selectMovieDetailsList);

    return (
        <Wrapper>
            {backdrop_path && (
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
            )}
        </Wrapper>
    )
};