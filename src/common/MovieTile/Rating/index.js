import {
    RatingElement,
    StarImage,
    VoteElements,
    VoteNumber
} from "./styled";

export const Rating = ({ vote_average, vote_count }) => (
    <RatingElement>
        <StarImage />
        <VoteElements>
            <VoteNumber>
                {vote_average.toFixed(1)}
            </VoteNumber>
            <VoteNumber
                thin
            >
                {vote_count} votes
            </VoteNumber>
        </VoteElements>
    </RatingElement>
);