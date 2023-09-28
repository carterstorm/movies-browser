import {
    RatingElement,
    StarElement,
    VoteAverage,
    VoteCount,
    VoteElements,
    VoteMax,
} from "./styled";

export const Rating = ({
    vote_average,
    vote_count,
    moviePage
}) => {
    if (moviePage) {
        return (
            <RatingElement
                moviePage
            >
                <VoteElements
                    moviePage
                >
                    <StarElement
                        moviePage
                    />
                    <VoteAverage
                        moviePage
                    >
                        {vote_average.toFixed(1)}
                    </VoteAverage>
                    <VoteMax>
                        / 10
                    </VoteMax>
                </VoteElements>
                <VoteCount
                    thin
                    moviePage
                >
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