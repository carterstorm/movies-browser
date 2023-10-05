import {
    RatingElement,
    StarElement,
    VoteAverage,
    VoteCount,
    VoteElements,
    VoteMax,
} from "./styled";

export const Rating = ({ vote_average, vote_count, movieHero, moviePage }) => (
    <RatingElement movieHero={movieHero}>
        <VoteElements movieHero={movieHero} moviePage={moviePage}>
            <StarElement movieHero={movieHero} moviePage={moviePage} />
            {vote_average &&
                <VoteAverage movieHero={movieHero} moviePage={moviePage}>
                    {vote_average.toFixed(1)}
                </VoteAverage>
            }
            {movieHero || moviePage ? (
                <VoteMax moviePage={moviePage} movieHero={movieHero}>
                    / 10
                </VoteMax>
            ) : null}
        </VoteElements>
        <VoteCount thin movieHero={movieHero} moviePage={moviePage}>
            {vote_count} votes
        </VoteCount>
    </RatingElement>
);