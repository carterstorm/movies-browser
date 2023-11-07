import { List, ListItem, StyledNavLink } from "./styled";

export const NavigationList = () => {
    const navigationListData = [
        { id: 1, path: "/movies", text: "movies" },
        { id: 2, path: "/people", text: "people" },
    ];

    return (
        <List>
            {navigationListData.map(({ id, path, text }) => (
                <ListItem key={id}>
                    <StyledNavLink
                        activeClassName="active"
                        to={path}>
                        {text}
                    </StyledNavLink>
                </ListItem>
            ))}
        </List>
    )
};