import start from "../../../../../assets/svg/star.svg";

import {
    RatingElement,
    StarImage,
    Vote,
    VoteAverage,
    VoteCount
} from "./styled";

export const Rating = ({ voteAverage, voteCount }) => (
    <RatingElement>
        <StarImage
            src={start}
            alt="star"
        />
        <Vote>
            <VoteAverage>
                {voteAverage}
            </VoteAverage>
            <VoteCount>
                {voteCount} votes
            </VoteCount>
        </Vote>
    </RatingElement>
);