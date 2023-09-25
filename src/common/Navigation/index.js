import { NavigationList } from "./NavigationList";
import { PageTitle } from "./PageTitle";
import { Search } from "./Search";
import {
    NavContainerRight,
    NavContainerLeft,
    Nav,
    Wrapper,
} from "./styled";

export const Navigation = () => (
    <Wrapper>
        <Nav>
            <NavContainerLeft>
                <PageTitle />
                <NavigationList />
            </NavContainerLeft>
            <NavContainerRight>
                <Search />
            </NavContainerRight>
        </Nav>
    </Wrapper>
);