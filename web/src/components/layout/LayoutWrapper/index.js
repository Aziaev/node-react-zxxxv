import styled from "styled-components";

export default function LayoutWrapper({ children }) {
  return (
    <StyledBodyDiv>
      <StyledBodyContainer>
        <StyledLeftBoardDiv />
        <StyledCenterBoard>{children}</StyledCenterBoard>
        <StyledRightBoardDiv />
      </StyledBodyContainer>
    </StyledBodyDiv>
  );
}

const StyledLeftBoardDiv = styled.div`
  flex: 0 0 100px;
  background-color: aliceblue;
`;

const StyledRightBoardDiv = styled.div`
  flex: 0 0 100px;
  background-color: aliceblue;
`;

const StyledBodyDiv = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  background-color: aliceblue;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  align-content: stretch;
`;

const StyledBodyContainer = styled.div`
  display: flex;
  background-color: aliceblue;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  align-content: stretch;
`;

const StyledCenterBoard = styled.div`
  flex: 1 1 auto;
  padding: 0 1rem;
  flex-direction: column;
`;
