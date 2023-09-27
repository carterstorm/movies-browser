import { MovieImage, MovieImageContainer, Wrapper } from "./styled";

export const MovieHeroSection = ({ backdrop_path }) => {
    return (
        <Wrapper>
            <MovieImageContainer>
                <MovieImage
                    src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                />
            </MovieImageContainer>
        </Wrapper>
    )
};