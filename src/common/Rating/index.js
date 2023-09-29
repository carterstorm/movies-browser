import {
    RatingElement,
    StarElement,
    VoteAverage,
    VoteCount,
    VoteElements,
    VoteMax,
} from "./styled";

export const Rating = ({ vote_average, vote_count, movieHero }) => {
    if (movieHero) {
        return (
            <RatingElement movieHero>
                <VoteElements movieHero>
                    <StarElement movieHero />
                    <VoteAverage movieHero>
                        {vote_average.toFixed(1)}
                    </VoteAverage>
                    <VoteMax>
                        / 10
                    </VoteMax>
                </VoteElements>
                <VoteCount thin movieHero>
                    {vote_count} votes
                </VoteCount>
            </RatingElement>
        )
    } else {
        return (
            <RatingElement>
                <VoteElements>
                    <StarElement />
                    <VoteAverage>
                        {vote_average.toFixed(1)}
                    </VoteAverage>
                </VoteElements>
                <VoteCount thin>
                    {vote_count} votes
                </VoteCount>
            </RatingElement>
        )
    }
};