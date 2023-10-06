import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPersonDetails } from "../../../personDetailsSlice";

export const PersonPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPersonDetails(id));
    }, [dispatch, id]);

    return (
        <>{id}</>
    );
};