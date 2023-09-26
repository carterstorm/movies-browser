import { Error } from "../Error";
import { Loading } from "../Loading";

export const Checker = ({
    children,
    isLoading,
    isError
}) => {
    return (
        <>
            {isLoading
                ? <Loading />
                : isError
                    ? <Error />
                    : children
            }
        </>
    )
};