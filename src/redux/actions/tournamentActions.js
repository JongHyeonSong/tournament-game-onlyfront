import * as types from "./actiontypes";
import _ from "lodash";
import { getRandomClub } from "../../utils";

// export const setTournament = () =>async(dispatch,getState)=> ({

//     dispatch({type:types.SET_TOURNAMENT_GROUP})
// });

export const setTournament = () => async (dispatch, getState) => {
  const clubs = getState().clubs;
  const groupedClubList = _.chunk(clubs, 4);
  const sorted = groupedClubList.map((group) =>
    group.sort((a, b) => b.clubScore - a.clubScore)
  );
  const firstGroup = sorted.map((group) => group[0]);
  const secondGroup = sorted.map((group) => group[1]);

  dispatch({
    type: types.SET_TOURNAMENT_GROUP,
    payload: { firstGroup, secondGroup },
  });
};

export const setFirstClubSelectable = () => async (dispatch, getState) => {
  const { firstGroup, secondGroup } = await getState().tournamentStatus;
  const randomFirstClub = getRandomClub(firstGroup);

  dispatch({
    //토너먼트16 첫자리 채우기
    type: types.SET_TOURNAMENT_16,
    payload: randomFirstClub,
  });

  dispatch({
    //보드에 보이는 좌우 클럽 채우기
    type: types.SET_BOARD,
    payload: { club: randomFirstClub, index: 0 },
  });

  dispatch({
    //first클럽 selectable 세팅

    type: types.SET_FIRST_SELECTABLE,
    payload: { clubName: randomFirstClub.clubName, selectable: "onLight" },
  });

  secondGroup.forEach((club) => {
    // 반복문 돌면서 second클럽 세팅

    const unSelectableCondition =
      club.groupName === randomFirstClub.groupName ||
      club.nation === randomFirstClub.nation;
    if (club.selectable === "selected") {
    } else if (unSelectableCondition) {
      dispatch({
        type: types.SET_SECOND_SELECTABLE,
        payload: { clubName: club.clubName, selectable: "unSelectable" },
      });
    } else {
      dispatch({
        type: types.SET_SECOND_SELECTABLE,
        payload: { clubName: club.clubName, selectable: "selectable" },
      });
    }
  });
};

export const setSecondClubSelectable = () => async (dispatch, getState) => {
  const tournamentStatus = await getState().tournamentStatus;
  const { firstGroup, secondGroup } = tournamentStatus;
  const randomSecondClub = getRandomClub(secondGroup);

  dispatch({
    //토너먼트16 채우기
    type: types.SET_TOURNAMENT_16,
    payload: randomSecondClub,
  });
  dispatch({
    //보드 좌우 채우기
    type: types.SET_BOARD,
    payload: { club: randomSecondClub, index: 1 },
  });

  // const tmpPossibleClubs = secondGroup.filter(
  //   (club) => club.selectable !== "selected"
  // );

  secondGroup.forEach((club) => {
    //selected를 제외하고 모두 selectable로
    if (club.selectable === "selected") {
    } else {
      dispatch({
        type: types.SET_SECOND_SELECTABLE,
        payload: { clubName: club.clubName, selectable: "selectable" },
      });
    }
  });

  dispatch({
    //2번쨰그룹의 랜덤클럽을 selected로 변경
    type: types.SET_SECOND_SELECTABLE,
    payload: { clubName: randomSecondClub.clubName, selectable: "selected" },
  });

  const onLightClub = firstGroup.find((club) => club.selectable === "onLight");

  dispatch({
    //onLight되어있는 first그룹의 클럽 내리기
    type: types.SET_FIRST_SELECTABLE,
    payload: { clubName: onLightClub.clubName, selectable: "selected" },
  });
};
