import { Error } from "../Error";
import { Loading } from "../Loading";

export const Checker = ({
    children,
    areLoading,
    areError
}) => {
    return (
        <>
            {areLoading
                ? <Loading />
                : areError
                    ? <Error />
                    : children
            }
        </>
    )
};