import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
} from "./ServicesEle";
import Icon1 from "../../staticfiles/images/svg-1.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our serviec</ServicesH1>

      <ServicesWrapper>
        <ServicesCard>
          <img style={{ height: "160px", width: "160px" }} src={Icon1} alt="" />
          <h1>test</h1>
          <p>testtest testtest testtest testtest testtest </p>
        </ServicesCard>{" "}
        <ServicesCard>
          <img style={{ height: "160px", width: "160px" }} src={Icon1} alt="" />
          <h1>test</h1>
          <p>testtest testtest testtest testtest testtest </p>
        </ServicesCard>{" "}
        <ServicesCard>
          <img style={{ height: "160px", width: "160px" }} src={Icon1} alt="" />
          <h1>test</h1>
          <p>testtest testtest testtest testtest testtest </p>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
