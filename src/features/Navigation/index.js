import { PageTitle } from "./PageTitle";
import {
    StyledNavLink,
    ListItem,
    List,
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
                <List>
                    <ListItem>
                        <StyledNavLink
                            to="/movies">
                            movies
                        </StyledNavLink>
                    </ListItem>
                    <ListItem>
                        <StyledNavLink
                            to="/people">
                            people
                        </StyledNavLink>
                    </ListItem>
                </List>
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