import { useHistory, useLocation } from "react-router-dom";

export const useReplacePageParameter = () => {
    const history = useHistory();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);

    const replacePageParameter = (key, value) => {
        if (!value === "") {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }
        history.replace(`${location.pathname}?${searchParams.toString()}`);
    };

    return replacePageParameter;
};