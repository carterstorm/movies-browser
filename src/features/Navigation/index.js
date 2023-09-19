import { NavigationList } from "./NavigationList";
import { PageTitle } from "./PageTitle";
import {
    NavContainerRight,
    NavContainerLeft,
    Nav,
    Wrapper,
    SearchBox,
    SearchBoxButton,
    SearchBoxInput
} from "./styled";


export const Navigation = () => (
    <Wrapper>
        <Nav>
            <NavContainerLeft>
                <PageTitle />
                <NavigationList />
            </NavContainerLeft>
            <NavContainerRight>
                <SearchBox>
                    <SearchBoxButton />
                    <SearchBoxInput
                        placeholder="Search for movies..."
                    />
                </SearchBox>
            </NavContainerRight>
        </Nav>
    </Wrapper>
);