import start from "../../../../../assets/svg/star.svg";

import {
    RatingElement,
    StarImage,
    VoteAverage,
    VoteCount,
    VoteElements
} from "./styled";

export const Rating = ({ voteAverage, voteCount }) => (
    <RatingElement>
        <StarImage
            src={start}
            alt="star"
        />
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