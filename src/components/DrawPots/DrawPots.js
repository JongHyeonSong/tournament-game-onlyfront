import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DrawPots.css";
import {
  setFirstClubSelectable,
  setSecondClubSelectable,
} from "../../redux/actions/tournamentActions";
import defaultClub from "../../staticfiles/images/default-club.png";

import {
  BoardImgWrapper,
  DrawPotsContainer,
  TournamentImgContainer,
  TournamentMatchContainer,
  WinnerGroupWrapper,
  Tour16Wrapper,
  TTd,
} from "./DrawPotsEle";
const DrawPots = () => {
  const [isfirstGroupTurn, setIsfirstGroupTurn] = useState(true);
  const { firstGroup, secondGroup, drawPotsBoard, tournament16 } = useSelector(
    (state) => state.tournamentStatus
  );
  const dispatch = useDispatch();

  //function
  const firstGroupBtn = () => {
    if (firstGroup.some((t) => t === null)) {
      alert("조별예선을 진행해주세요");
      return;
    }
    if (!isfirstGroupTurn) return;
    if (tournament16.every((item) => item !== null)) return;
    dispatch(setFirstClubSelectable());
    setIsfirstGroupTurn((prev) => !prev);
  };

  const secondGroupBtn = () => {
    if (secondGroup.some((t) => t === null)) {
      alert("조별예선을 진행해주세요");
      return;
    }

    if (isfirstGroupTurn) return;
    if (tournament16.every((item) => item !== null)) return;
    dispatch(setSecondClubSelectable());
    setIsfirstGroupTurn((prev) => !prev);
  };

  return (
    <DrawPotsContainer id="drawPots">
      <TournamentImgContainer>
        <Tour16Wrapper>
          {tournament16.map((club, i) => (
            <span key={i}>
              <img src={club ? club.src : defaultClub} alt="" />
            </span>
          ))}
        </Tour16Wrapper>
        <BoardImgWrapper>
          <span>
            {drawPotsBoard[0] ? (
              <img src={drawPotsBoard[0].src} alt="f" />
            ) : (
              <img src={defaultClub} alt="f" />
            )}
          </span>
          <span>
            {drawPotsBoard[1] ? (
              <img src={drawPotsBoard[1].src} alt="f" />
            ) : (
              <img src={defaultClub} alt="f" />
            )}
          </span>
        </BoardImgWrapper>
      </TournamentImgContainer>
      <TournamentMatchContainer>
        <WinnerGroupWrapper>
          <h1 style={{ textAlign: "right" }}>
            1위조 <button onClick={firstGroupBtn}>1위조 추첨</button>
          </h1>
          <table>
            <tbody>
              <tr>
                <th>이전조</th>
                <th>국가</th>
                <th>클럽명</th>
                <th>로고</th>
              </tr>
            </tbody>
            {firstGroup[0] &&
              firstGroup.map((club) => (
                <tbody key={club.clubName}>
                  <tr>
                    <td>{club.groupName}</td>
                    <td>{club.nation}</td>
                    <TTd selectable={club.selectable}>{club.clubName}</TTd>
                    <td>
                      <img src={club.src} alt="" />
                    </td>{" "}
                  </tr>
                </tbody>
              ))}
          </table>
        </WinnerGroupWrapper>
        <WinnerGroupWrapper>
          <h1>
            <button onClick={secondGroupBtn}>2위조 추첨</button> 2위조
          </h1>

          <table>
            <tbody>
              <tr>
                <th>로고</th>
                <th>클럽명</th>
                <th>국가</th>
                <th>이전조</th>
              </tr>
            </tbody>
            {secondGroup[0] &&
              secondGroup.map((club) => (
                <tbody key={club.clubName}>
                  <tr>
                    <td>
                      <img src={club.src} alt="" />
                    </td>
                    <TTd selectable={club.selectable}>{club.clubName}</TTd>
                    <td>{club.nation}</td>
                    <td>{club.groupName}</td>
                  </tr>
                </tbody>
              ))}
          </table>
        </WinnerGroupWrapper>
      </TournamentMatchContainer>
    </DrawPotsContainer>
  );
};

export default DrawPots;
