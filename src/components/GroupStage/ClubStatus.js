import { useDispatch } from "react-redux";
import { changeClubPower } from "../../redux/actions/clubsActions";
import React from "react";
import { GiBroadsword } from "react-icons/gi";

import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillBulb,
  AiFillQuestionCircle,
} from "react-icons/ai";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const ClubStatus = ({ club }) => {
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    const clubPower =
      e.target.name === "up"
        ? parseInt(club.clubPower) + 1
        : parseInt(club.clubPower) - 1;
    dispatch(changeClubPower(club.clubName, clubPower));
  };
  return (
    <div>
      <img src={club.src} alt="t" />
      {"  "}
      <button name="up" onClick={onClickHandler}>
        <AiFillCaretUp style={{ pointerEvents: "none" }} />
      </button>
      <GiBroadsword /> {club.clubPower}{" "}
      <button name="down" onClick={onClickHandler}>
        <AiFillCaretDown style={{ pointerEvents: "none" }} />
      </button>
      {"  "}
      최근경기 :{" "}
      {club.recentMatch.map((match, i) => {
        if (match === 0) {
          return <AiFillCloseCircle color="red" key={i} />;
        } else if (match === 1) {
          return <AiFillBulb color="gray" key={i} />;
        } else if (match === 3) {
          return <AiFillCheckCircle color="green" key={i} />;
        } else {
          return <AiFillQuestionCircle color="gray" key={i} />;
        }
      })}
      승점 : {club.clubScore}
      {"  "}
    </div>
  );
};

export default ClubStatus;
