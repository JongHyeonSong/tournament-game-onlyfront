import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import "./GroupStage.css";
import { crossMatch } from "../../utils";
import { openDay } from "../../redux/actions/groupStageActions";
import { setTournament } from "../../redux/actions/tournamentActions";
import ClubStatus from "./ClubStatus";
import MatchStatus from "./MatchStatus";
import {
  ClubMatchWrapper,
  ClubStatusWrapper,
  DayWrapper,
  GroupStageContainer,
  GroupsWrapper,
  GroupWrapper,
  TopWrapper,
} from "./GroupStageEle";
import { Button, MyButton } from "../ButtonElements";

//보낼 컴포넌트
const GroupStage = () => {
  const clubs = useSelector((state) => state.clubs);
  const groupStatus = useSelector((state) => state.groupStatus);
  const { days, openedMatch } = groupStatus;
  const dispatch = useDispatch();
  const groupedClubList = _.chunk(clubs, 4);

  const onClickDayBtn = (day) => {
    dispatch(openDay(day));
  };

  const onClickStartTour = () => {
    dispatch(setTournament());
  };
  return (
    <GroupStageContainer id="groupStage">
      <TopWrapper>
        <DayWrapper>
          {days.map((day, i) =>
            !day ? (
              <MyButton key={i} onClick={() => onClickDayBtn(i + 1)}>
                Day {i + 1}
              </MyButton>
            ) : (
              <MyButton key={i} unclickable="true">
                Day {i + 1} Done
              </MyButton>
            )
          )}
        </DayWrapper>

        {openedMatch === 96 ? (
          <Button to="drawPots" onClick={onClickStartTour}>
            조추첨 시작하기
          </Button>
        ) : (
          <MyButton unclickable="true">
            {`현재 경기 : (${openedMatch} / 96)`}
          </MyButton>
        )}
      </TopWrapper>

      <GroupsWrapper>
        {groupedClubList.map((group) => (
          <GroupWrapper key={group[0].groupName}>
            <h1>{group[0].groupName}조 조별예선</h1>

            <ClubStatusWrapper>
              {group.map((club) => (
                <ClubStatus club={club} key={club.clubName} />
              ))}
            </ClubStatusWrapper>
            <ClubMatchWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Match1</th>
                    <th>Match2</th>
                  </tr>
                </thead>
                {crossMatch.map((match, i) => (
                  <tbody key={i}>
                    <tr>
                      <td>Day {i + 1}</td>
                      <td>
                        <MatchStatus
                          day={i + 1}
                          match={match[0]}
                          group={group}
                        />
                      </td>
                      <td>
                        <MatchStatus
                          day={i + 1}
                          match={match[1]}
                          group={group}
                        />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </ClubMatchWrapper>
          </GroupWrapper>
        ))}
      </GroupsWrapper>
    </GroupStageContainer>
  );
};

export default GroupStage;
