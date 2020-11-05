import React from "react";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContents,
  HeroBtnWrapper,
} from "./HeroSectionEle";
import Video from "../../staticfiles/videos/champions-league-opening.mp4";
import { Button } from "../ButtonElements";
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          style={{ width: "100%" }}
          loop
          muted
          autoPlay
          src={Video}
          type="video/mp4"
        />
      </HeroBg>

      <HeroContents>
        <h1>조별리그 부터 결승까지!</h1>
        <p style={{ fontSize: "bold" }}>
          1. A~H 8조가 각각 12경기씩해서 6일간 스탯에따른 랜덤으로 승/무/패
          결정하여 총 96경기를 진행합니다(날짜별로 스킵가능)
          <br />
          2. 16강 토너먼트를 위한 조추첨을 1위진출조 우선 하여 랜덤으로
          선택합니다. 2위진출조를 또한 랜덤으로 뽑게되는데 이때 같은 국가리그 /
          같은조 출신은 제외됩니다
          <br />
          3. 뽑힌 16개의 팀으로 16강부터 결승까지 진행합니다.
        </p>
        <HeroBtnWrapper>
          <Button
            to="groupStage"
            smooth={true}
            duration={500}
            exact="true"
            offset={-80}
          >
            Get Started
          </Button>
        </HeroBtnWrapper>
      </HeroContents>
    </HeroContainer>
  );
};

export default HeroSection;
