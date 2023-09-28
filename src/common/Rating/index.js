import {
    RatingElement,
    StarElement,
    VoteAverage,
    VoteCount,
    VoteElements,
} from "./styled";

export const Rating = ({
    vote_average,
    vote_count,
}) => {
    return (
        <RatingElement>
            <VoteElements>
                <StarElement />
                <VoteAverage>
                    {vote_average.toFixed(1)}
                </VoteAverage>
            </VoteElements>
            <VoteCount
                thin
            >
                {vote_count} votes
            </VoteCount>
        </RatingElement>
    )
};