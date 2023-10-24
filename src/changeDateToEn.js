export const changeDateToLocal = (date, location) => {
    return new Date(date).toLocaleDateString(location);
};