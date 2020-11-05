import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #010606;
  color: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesH1 = styled.h1`
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #000;
  align-items: center;

  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;
