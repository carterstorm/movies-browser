import {
    RatingElement,
    StarImage,
    VoteAverage,
    VoteCount,
    VoteElements
} from "./styled";

export const Rating = ({ voteAverage, voteCount }) => (
    <RatingElement>
        <StarImage />
        <VoteElements>
            <VoteAverage>
                {voteAverage}
            </VoteAverage>
            <VoteCount>
                {voteCount} votes
            </VoteCount>
        </VoteElements>
    </RatingElement>
);