import styled from "styled-components";

export const GroupStageContainer = styled.div`
  background: #f4f4f4;
  height: 2600px;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 30px;
  z-index: 1;

  @media screen and (max-width: 1100px) {
    height: 5000px;
  }
`;
export const TopWrapper = styled.div`
  width: 1100px;
  display: grid;
  grid-template-columns: 6fr 1fr;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    width: 550px;
  }
`;
export const DayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  color: #fff;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const GroupsWrapper = styled.div`
  width: 1100px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    width: 550px;
  }
`;

export const GroupWrapper = styled.div`
  padding: 10px 30px;
  width: 550px;
  height: 600px;
  border: 1px solid black;
  background: linear-gradient(to right, rgb(255, 188, 188), rgb(248, 143, 143));

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h1 {
    border-bottom: 1px solid black;
  }
`;

export const ClubStatusWrapper = styled.div`
  padding: 0 10px;

  & div {
    /* margin-left: 10px; */
    padding-left: 10px;
    margin-top: 20px;
    border-left: 6px solid black;
  }
`;

export const ClubMatchWrapper = styled.div`
  margin-left: -20px;
  margin-bottom: 30px;

  & table tbody:nth-child(2n) {
    background-color: #b01f1f;
  }

  & table tbody:nth-child(2n + 1) {
    background-color: #3b3bb0;
  }
`;

export const InnerMatchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MatchBtnWrapper = styled.div`
  display: inline-block;
  width: 80px;
  text-align: center;
  justify-content: space-around;
  font-size: 1.2rem;
`;
