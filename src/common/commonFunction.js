export const getNumberOfCast = cast => cast ? `Cast (${cast.length})` : null;

export const getNumberOfCrew = crew => crew ? `Crew (${crew.length})` : null;

export const checkPageUrlNumber = urlPageNumber => {
    return urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber;
};