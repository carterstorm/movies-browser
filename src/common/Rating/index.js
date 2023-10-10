import {
    RatingElement,
    StarElement,
    VoteAverage,
    VoteCount,
    VoteElements,
    VoteMax,
} from "./styled";

export const Rating = ({ vote_average, vote_count, movieHero, page }) => (
    <RatingElement movieHero={movieHero}>
        <VoteElements movieHero={movieHero} page={page}>
            <StarElement movieHero={movieHero} page={page} />
            {vote_average ?
                (<VoteAverage movieHero={movieHero} page={page}>
                    {vote_average.toFixed(1)}
                </VoteAverage>)
                : null
            }
            {(movieHero || page) ? (
                <VoteMax page={page} movieHero={movieHero}>
                    / 10
                </VoteMax>
            ) : null}
        </VoteElements>
        <VoteCount thin movieHero={movieHero} page={page}>
            {vote_count} votes
        </VoteCount>
    </RatingElement>
);