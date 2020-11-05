import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  drawTheMatch,
  looseTheMatch,
  winTheMatch,
} from "../../redux/actions/clubsActions";
import { openMatch } from "../../redux/actions/groupStageActions";
import { goMatch } from "../../utils";
import { MatchBtnWrapper, InnerMatchWrapper } from "./GroupStageEle";

import { BsFlag, BsTrophy } from "react-icons/bs";

const MatchStatus = ({ match, group, day }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const days = useSelector((state) => state.groupStatus.days);

  useEffect(() => {
    if (days[day - 1] === true && !isOpen) {
      onClickHandler(group[match[0]], group[match[1]]);
    }
  }, [days]);

  const onClickHandler = (leftClub, rightClub) => {
    dispatch(openMatch());
    const matchResult = goMatch(leftClub, rightClub);

    if (matchResult === "left") {
      setIsOpen(matchResult);
      dispatch(winTheMatch(leftClub));
      dispatch(looseTheMatch(rightClub));
    } else if (matchResult === "right") {
      setIsOpen(matchResult);
      dispatch(winTheMatch(rightClub));
      dispatch(looseTheMatch(leftClub));
    } else {
      dispatch(drawTheMatch(leftClub));
      setIsOpen(matchResult);
      dispatch(drawTheMatch(rightClub));
    }
  };
  return (
    <InnerMatchWrapper>
      <img src={group[match[0]].src} alt="f"></img>

      <MatchBtnWrapper>
        {!isOpen ? (
          <button
            onClick={() => onClickHandler(group[match[0]], group[match[1]])}
          >
            경기시작
          </button>
        ) : isOpen === "left" ? (
          <>
            <BsTrophy />
            {"  "}
            <BsFlag />
          </>
        ) : isOpen === "right" ? (
          <>
            <BsFlag />
            {"  "}
            <BsTrophy />
          </>
        ) : (
          "DRAW"
        )}
      </MatchBtnWrapper>
      <img src={group[match[1]].src} alt="f"></img>
    </InnerMatchWrapper>
  );
};

export default MatchStatus;
