import styled from "styled-components";

export const TournamentContainer = styled.div`
  background-color: #f4f4f4;
  color: #fff;
  display: flex;
  height: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TournamentsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1100px;
`;

export const TournamentBtnWrapper = styled.div`
  position: absolute;
  right: 10%;
  top: 5%;
`;

export const TournamentWrapper = styled.div`
  padding: 20px;
  width: 1100px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const TournamentLine = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:last-child div {
    border-bottom: 5px solid black;
    border-top: 5px solid black;
  }

  &:nth-child(2n) {
    background: #595454;
  }

  &:nth-child(2n + 1) {
    background: #282525;
  }
`;

export const ClubBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 1.2rem;
  &:nth-child(2n + 1) {
    border-top: 5px solid black;
  }

  &:nth-child(2n) {
    border-bottom: 5px solid black;
  }

  & img {
    margin-right: 10px;
  }
`;
