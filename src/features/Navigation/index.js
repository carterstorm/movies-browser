import video from "../../assets/svg/video.svg";
import {
    StyledNavLink,
    ListItem,
    List,
    Logo,
    PageTitle,
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
                <PageTitle
                    to="#">
                    <Logo
                        src={video}
                        alt="Page title video logo"
                    />
                    movies browser
                </PageTitle>
                <List>
                    <ListItem>
                        <StyledNavLink
                            to="#">
                            movies
                        </StyledNavLink>
                    </ListItem>
                    <ListItem>
                        <StyledNavLink
                            to="#">
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