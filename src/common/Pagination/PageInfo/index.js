import { useSelector } from "react-redux";
import {
    selectNumberOfPages,
} from "../../../listSlice";
import { checkPageUrlNumber } from "../../checkPageUrlNumber";
import { usePageParameter } from "../../../pageParameters";
import {
    PageInfoContainer,
    PageNumber,
    PageText,
} from "./styled";
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