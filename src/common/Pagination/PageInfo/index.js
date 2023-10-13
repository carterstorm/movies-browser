import { useSelector } from "react-redux";
import {
    selectNumberOfPages,
} from "../../../listSlice";
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
    const numberOfPages = useSelector(selectNumberOfPages)

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
                {numberOfPages}
            </PageNumber>
        </PageInfoContainer>
    );
};