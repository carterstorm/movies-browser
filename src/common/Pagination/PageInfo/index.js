import { useSelector } from "react-redux";
import { selectMaxPageNumber } from "../../../listSlice";
import { usePageParameter } from "../../../pageParameters";
import {
    PageInfoContainer,
    PageNumber,
    PageText,
} from "./styled";
import { checkPageUrlNumber } from "../../commonFunction";
export const PagesInfo = () => {
    const urlPageNumber = +usePageParameter("page");
    const page = checkPageUrlNumber(urlPageNumber);
    const maxPageNumber = useSelector(selectMaxPageNumber);
    return (
        <PageInfoContainer>
            <PageText>
                Page
            </PageText>
            <PageNumber>
                {page}
            </PageNumber>
            <PageText>
                of
            </PageText>
            <PageNumber>
                {maxPageNumber}
            </PageNumber>
        </PageInfoContainer>
    );
};