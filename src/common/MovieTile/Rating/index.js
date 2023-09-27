import {
    RatingElement,
    StarElement,
    VoteElements,
    VoteNumber
} from "./styled";

export const Rating = ({ vote_average, vote_count }) => (
    <RatingElement>
        <VoteElements>
            <StarElement />
            <VoteNumber>
                {vote_average.toFixed(1)}
            </VoteNumber>
        </VoteElements>
        <VoteNumber
            thin
        >
            {vote_count} votes
        </VoteNumber>
    </RatingElement>
);