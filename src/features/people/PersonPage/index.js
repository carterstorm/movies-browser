import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPersonDetails, selectArePersonDetailsError, selectArePersonDetailsLoading } from "../../../personDetailsSlice";
import { Checker } from "../../../common/Checker";
import { BigTileElement } from "../../../common/tile/BigTileElement";
import { BigPersonTile } from "../../../common/tile/BigTileElement/BigPersonTile";

export const PersonPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const areLoading = useSelector(selectArePersonDetailsLoading);
    const areError = useSelector(selectArePersonDetailsError);

    useEffect(() => {
        dispatch(fetchPersonDetails(id));
    }, [dispatch, id]);

    return (
        <Checker
            areLoading={areLoading}
            areError={areError}
        >
            <BigTileElement
                children={<BigPersonTile />}
            />
        </Checker>
    );
};