import styled from "styled-components";
import { Alignment, Button, Navbar } from "@blueprintjs/core";

export default function Footer({
  footerContent = (
    <>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>
          <b>ZXXXV</b>
        </Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="document" text="Files" />
      </Navbar.Group>
    </>
  ),
}) {
  return (
    <StyledFooterContainer>
      <Navbar>{footerContent}</Navbar>
    </StyledFooterContainer>
  );
}

export const FOOTER_HEIGHT = "50px";

const StyledFooterContainer = styled.div`
  margin: 1rem 0 0 0;
  height: ${FOOTER_HEIGHT};
  width: 100%;
`;
