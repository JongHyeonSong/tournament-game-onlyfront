import styled from "styled-components";

export const SigninContainer = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;

  background: linear-gradient(
    108deg,
    rgba(1, 147, 88, 1) 0%,
    rgba(10, 200, 122, 1) 100%
  );
`;

export const SigninNav = styled.div`
  height: 70px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavH1 = styled.h1`
  font-size: 1.5rem;
  color: #fff;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 0 20px;
  background: linear-gradient(to top, #7579ff, #b224ef);
  padding: 55px 15px 37px 15px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormH1 = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #fff;
  font-size: 30px;
  font-weight: 400;
`;

export const FormEle = styled.div`
  width: 100%;
  border-bottom: 2px solid #7579ff;
`;

export const FormBtn = styled.button`
  background: #fff;
  border-radius: 30px;
  padding: 5px 10px;
  border: none;
  outline: none;
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    color: #fff;
    background: linear-gradient(to top, #7579ff, #b224ef);
    transition: all 0.2s ease-in;
  }
`;
