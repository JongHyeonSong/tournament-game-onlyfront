import React, { useState } from "react";
import "./Tournament.css";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { goMatch } from "../../utils";
import {
  TournamentBtnWrapper,
  TournamentContainer,
  TournamentsWrapper,
  TournamentWrapper,
  TournamentLine,
  ClubBox,
} from "./TournamentEle";
import { MyButton } from "../ButtonElements";
const Tournament = () => {
  const dispatch = useDispatch();

  const { tournament16 } = useSelector((state) => state.tournamentStatus);

  const [tour8, setTour8] = useState(Array(8).fill(null));
  const [tour4, setTour4] = useState(Array(4).fill(null));
  const [tour2, setTour2] = useState(Array(2).fill(null));
  const [tour1, setTour1] = useState(Array(1).fill(null));

  const totournamentGroupur = [tour2, tour4, tour8, tournament16];
  const setTournamentGroup = [setTour1, setTour2, setTour4, setTour8];

  const onClickHandler = (index) => {
    if (totournamentGroupur[index].some((t) => t === null)) return;

    const groupedBy2 = _.chunk(totournamentGroupur[index], 2);
    groupedBy2.forEach((club2) => {
      const result = goMatch(club2[0], club2[1], false);
      setTournamentGroup[index]((prev) =>
        prev.map((club, i) =>
          prev.findIndex((t) => t === null) === i ? result : club
        )
      );
    });
  };

  const onClickReset = () => {
    //
  };
  return (
    <TournamentContainer id="tournament">
      {tournament16.every((i) => i !== null) ? (
        <TournamentsWrapper>
          <TournamentBtnWrapper>
            <MyButton onClick={() => onClickHandler(3)}>16강</MyButton>
            <MyButton onClick={() => onClickHandler(2)}>8강</MyButton>
            <MyButton onClick={() => onClickHandler(1)}>4강</MyButton>
            <MyButton onClick={() => onClickHandler(0)}>결승</MyButton>
            {tour1[0] ? (
              <MyButton onClick={onClickReset}>다시하기</MyButton>
            ) : null}
          </TournamentBtnWrapper>
          <TournamentWrapper>
            <TournamentLine>
              {tournament16.map((club) => (
                <ClubBox>
                  <img src={club.src} alt="" />
                  {club.clubName}
                </ClubBox>
              ))}
            </TournamentLine>
            <TournamentLine>
              {tour8.map((club) => (
                <ClubBox>
                  {club ? (
                    <>
                      <img src={club.src} alt="" />
                      {club.clubName}
                    </>
                  ) : (
                    <p>경기를 진행해주세요</p>
                  )}
                </ClubBox>
              ))}
            </TournamentLine>
            <TournamentLine className="tournament">
              {tour4.map((club) => (
                <ClubBox>
                  {club ? (
                    <>
                      <img src={club.src} alt="" />
                      {club.clubName}
                    </>
                  ) : (
                    <p>경기를 진행해주세요</p>
                  )}
                </ClubBox>
              ))}
            </TournamentLine>
            <TournamentLine className="tournament">
              {tour2.map((club) => (
                <ClubBox>
                  {club ? (
                    <>
                      <img src={club.src} alt="" />
                      {club.clubName}
                    </>
                  ) : (
                    <p>경기를 진행해주세요</p>
                  )}
                </ClubBox>
              ))}
            </TournamentLine>
            <TournamentLine className="tournament">
              {tour1.map((club) => (
                <ClubBox>
                  {club ? (
                    <>
                      <img src={club.src} alt="" />
                      {club.clubName}
                    </>
                  ) : (
                    <p>경기를 진행해주세요</p>
                  )}
                </ClubBox>
              ))}
            </TournamentLine>
          </TournamentWrapper>
        </TournamentsWrapper>
      ) : (
        <div style={{ color: "black" }}>조추첨을 먼저 완료해주세요</div>
      )}
    </TournamentContainer>
  );
};

export default Tournament;
