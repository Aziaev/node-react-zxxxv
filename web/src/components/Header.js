import { Alignment, Button, Navbar } from "@blueprintjs/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>
          <StyledLogoLink to="/">
            <b>ZXXXV</b>
          </StyledLogoLink>
        </Navbar.Heading>
        <Navbar.Divider />

        <StyledLink to="/home">
          <Button className="bp3-minimal" icon="home" text="Home" />
        </StyledLink>
        <StyledLink to="/me">
          <Button className="bp3-minimal" icon="document" text="Me" />
        </StyledLink>
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
