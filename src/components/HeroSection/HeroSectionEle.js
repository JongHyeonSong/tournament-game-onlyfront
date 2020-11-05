import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  height: 800px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 30px;
  position: relative;
  z-index: 1;

  /* 전체적 어둡게 */
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  /* width: 100%;
  height: 100%; */
  background: #232a34;
  object-fit: cover;
`;

export const HeroContents = styled.div`
  max-width: 1100px;
  z-index: 3;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeroBtnWrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
