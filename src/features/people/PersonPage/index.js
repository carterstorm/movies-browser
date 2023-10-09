import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Checker } from "../../../common/Checker";
import { BigTileElement } from "../../../common/tile/BigTileElement";
import { BigPersonTile } from "../../../common/tile/BigTileElement/BigPersonTile";
import { fetchDetails, selectAreDetailsError, selectAreDetailsLoading } from "../../../detailsSlice";
import { Main } from "../../../common/Main";


export const PersonPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const areLoading = useSelector(selectAreDetailsLoading);
    const areError = useSelector(selectAreDetailsError);

    useEffect(() => {
        dispatch(fetchDetails({ id, type: "person" }));
    }, [dispatch, id]);

    return (
        <Checker
            areLoading={areLoading}
            areError={areError}
        >
            <Main>
                <BigTileElement
                    children={<BigPersonTile />}
                />
            </Main>
        </Checker>
    );
};