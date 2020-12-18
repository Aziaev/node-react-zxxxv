import { Alignment, Button, Navbar } from "@blueprintjs/core";
import { isEmpty } from "lodash";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { homePageRoute } from "../pages/Home";
import { shallowEqual, useSelector } from "react-redux";
import { userSelector } from "../pages/StartPage/store/selectors";
import { LOGIN_PAGE_ROUTE } from "../pages/Login";
import UserButton from "./UserButton";

export default function Header() {
  const user = useSelector(userSelector, shallowEqual);

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>
          <StyledLogoLink to="/">
            <b>ZXXXV</b>
          </StyledLogoLink>
        </Navbar.Heading>
        <Navbar.Divider />

        <StyledLink to={homePageRoute}>
          <Button className="bp3-minimal" icon="home" text="Home" />
        </StyledLink>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        {!isEmpty(user) ? (
          <UserButton />
        ) : (
          <>
            {" "}
            <Navbar.Divider />
            <StyledLink to={LOGIN_PAGE_ROUTE}>
              <Button className="bp3-minimal" icon="log-in" text="Login" />
            </StyledLink>
          </>
        )}
      </Navbar.Group>
    </Navbar>
  );
}

export const HEADER_HEIGHT = "50px";

const StyledLogoLink = styled(Link)`
  color: #5c7080;

  :hover {
    color: black;
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
  }

  :focus {
    text-decoration: none;
    outline: 0;
  }
`;
