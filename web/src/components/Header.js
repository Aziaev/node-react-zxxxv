import { Alignment, Button, Navbar } from "@blueprintjs/core";
import { isEmpty } from "lodash";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { homePageRoute } from "../pages/Home";
import { shallowEqual, useSelector } from "react-redux";
import { userSelector } from "../pages/StartPage/store/selectors";
import { loginPageRoute } from "../pages/Login";

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
        <StyledLink to="/me">
          <Button className="bp3-minimal" icon="document" text="Me" />
        </StyledLink>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        {!isEmpty(user) ? (
          <>
            {" "}
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="user" text={user.name} />
          </>
        ) : (
          <>
            {" "}
            <Navbar.Divider />
            <StyledLink to={loginPageRoute}>
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
