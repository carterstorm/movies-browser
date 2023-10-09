import { useSelector } from "react-redux";
import { movieHeroLink } from "../../../../common/commonValues";
import { Rating } from "../../../../common/Rating";
import { selectDetailsItemData } from "../../../../detailsSlice";

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
    } = useSelector(selectDetailsItemData).itemData;

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
                                movieHero
                                vote_average={vote_average}
                                vote_count={vote_count}
                            />
                        </MovieDetailsInfo>
                    </MovieDetails>
                    <MovieImage
                        src={`${movieHeroLink}${backdrop_path}`}
                    />
                </MovieImageContainer>
            )}
        </Wrapper>
    )
};