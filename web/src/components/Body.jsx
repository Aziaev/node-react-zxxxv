import { Card } from "@blueprintjs/core";
import styled from "styled-components";
import { FOOTER_HEIGHT } from "./Footer";
import { HEADER_HEIGHT } from "./Header";

export default function Body({ children }) {
  return (
    <StyledBodyContainer>
      <StyledCard>{children}</StyledCard>
    </StyledBodyContainer>
  );
}

const StyledBodyContainer = styled.div`
  height: calc(100% - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - 1rem);
  width: 100%;
  max-width: 100%;
  word-break: break-word;
  display: flex;
`;

const StyledCard = styled(Card)`
  margin: 1rem 0 0 0;
  width: 100%;
`;
