import {
    RatingElement,
    StarElement,
    VoteAverage,
    VoteCount,
    VoteElements,
    VoteMax,
} from "./styled";

export const Rating = ({ vote_average, vote_count, movieHero }) => (
    <RatingElement movieHero={movieHero}>
        <VoteElements movieHero={movieHero}>
            <StarElement movieHero={movieHero} />
            <VoteAverage movieHero={movieHero}>
                {vote_average.toFixed(1)}
            </VoteAverage>
            {movieHero ? (
                <VoteMax>
                    / 10
                </VoteMax>
            ) : null}
        </VoteElements>
        <VoteCount thin movieHero={movieHero}>
            {vote_count} votes
        </VoteCount>
    </RatingElement>
);