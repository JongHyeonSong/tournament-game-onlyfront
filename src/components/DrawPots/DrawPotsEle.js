import styled from "styled-components";

export const DrawPotsContainer = styled.div`
  background-color: #101522;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  justify-content: center;
`;

export const TournamentImgContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 300px;
`;

export const TournamentMatchContainer = styled.div`
  padding: 20px 20px;
  width: 100%;
  max-width: 1100px;
  height: 400px;
  /* background-color: rgb(129, 124, 124); */

  display: flex;
  justify-content: space-between;
`;

export const Tour16Wrapper = styled.div`
  text-align: center;
`;

export const BoardImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  & img {
    width: 250px;
    height: 250px;

    margin-bottom: 20px;
    border-bottom: 3px solid black;
  }
`;

export const WinnerGroupWrapper = styled.div`
  width: 50%;

  & table:nth-child(2n) {
    background: #cfcfcf;
  }

  & table tbody:nth-child(2n + 1) {
    background: #f1f1f1;
  }

  & h1 {
    color: #fff;
  }
`;

export const TTd = styled.td`
  color: ${({ selectable }) =>
    selectable === "selectable"
      ? "green"
      : selectable === "selected"
      ? "gray"
      : selectable === "onLight"
      ? "purple"
      : selectable === "unSelectable"
      ? "red"
      : "black"};
`;
