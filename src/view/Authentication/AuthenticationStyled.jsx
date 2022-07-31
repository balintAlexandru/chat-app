// LIBRARIES
import styled, { css, keyframes, ServerStyleSheet } from "styled-components";

// container
export const Container = styled.div(
  ({ style }) => css`
    ${style.device === "mobile" &&
    css`
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 9rem 3.5rem 30rem 3.5rem;
      position: fixed;
      min-height: 100%;
    `}
    ${style.device === "browser" &&
    css`
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15rem 30rem;
      @media (min-width: 1920px) {
        background-color: red;
      }
    `}
  `
);

// authentication wrapper
export const AuthenticationWrapper = styled.div(
  ({ style }) => css`
    ${style.device === "mobile" &&
    css`
      width: 100%;
      height: 100%;
      border-radius: 1.4rem;
      z-index: 9;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
    ${style.device === "browser" &&
    css`
      width: 100%;
      height: 100%;
      border-radius: 1.4rem;
      z-index: 9;
      display: flex;
      align-items: center;
    `} /* width: ${style.isMobile ? "85%" : "50%"};
    height: ${style.isMobile ? "75%" : "60%"};
   
    background: rgba(48, 39, 68, 0.24);
    border-radius: 1.4rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: 10;
    ${style.isMobile &&
    css`
      justify-content: center;
      align-items: center;
    `} */
  `
);
export const AuthenticationInfo = styled.div(
  ({ style }) => css`
    ${style.device === "mobile" &&
    css`
      width: 100%;
      border-top-left-radius: 1.6rem;
      border-top-right-radius: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(59, 84, 126, 0.168);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(6.1px);
      -webkit-backdrop-filter: blur(6.1px);
    `}
    ${style.device === "browser" &&
    css`
      width: 100%;
      height: 100%;
      border-top-left-radius: 1.6rem;
      border-bottom-left-radius: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(59, 84, 126, 0.168);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(6.1px);
      -webkit-backdrop-filter: blur(6.1px);
    `} /* width: 60%;
    height: 100%;
    border-top-left-radius: 1.6rem;
    border-bottom-left-radius: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ${style.isMobile &&
    css`
      width: 100%;
      height: 20%;
      border-top-left-radius: 1.6rem;
      border-top-right-radius: 1.6rem;
      border-bottom-left-radius: 0rem;
    `} */
  `
);

export const AuthenticationContent = styled.div(
  ({ style }) => css`
    ${style.device === "mobile" &&
    css`
      width: 100%;
      height: 100%;
      background: #46315d;
      border-bottom-right-radius: 1.6rem;
      border-bottom-left-radius: 1.6rem;
      padding: 2rem;
    `}
    ${style.device === "browser" &&
    css`
      width: 100%;
      height: 100%;
      background: #46315d;
      border-top-right-radius: 1.6rem;
      border-bottom-right-radius: 1.6rem;
      padding: 2rem;
    `} /* width: 40%;
    height: 100%;
    background: #3c2b50;
    border-top-right-radius: 1.6rem;
    border-bottom-right-radius: 1.6rem;
    padding: 3rem;
    ${style.isMobile &&
    css`
      width: 100%;
      border-top-right-radius: 0rem;
      border-bottom-right-radius: 1.6rem;
      border-bottom-left-radius: 1.6rem;
    `} */
  `
);
export const AuthenticationInfoBackground = styled.img`
  width: 100%;
  height: 100%;
  opacity: 20%;
  backdrop-filter: blur(5px);
  border-top-left-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
  object-fit: cover;
  position: absolute;
  top: 0;
`;

export const AuthenticationLogoWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AuthenticationLogo = styled.img(
  ({ style }) => css`
    width: 100%;
    height: 100%;
    filter: contrast(70%);
    /* width: 25rem;
    height: 25rem;
   
    ${style.isMobile &&
    css`
      width: 15rem;
      height: 15rem;
    `} */
  `
);

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitleWrapper = styled.div`
  width: 100%;
`;
export const FormTitle = styled.span(
  ({ style }) => css`
    font-size: ${style.isMobile ? "2rem" : "3rem"};
    font-weight: 800;
    color: white;
  `
);

export const InputsWrapper = styled.div(
  ({ style }) => css`
    ${console.log(style)}
    ${style.device === "mobile" &&
    css`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      padding: 4.5rem 3rem 3rem 3rem;
    `}
    ${style.device === "browser" &&
    style.path === "LOGIN" &&
    css`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      padding: 10rem 3rem 3rem 3rem;
    `}
    ${style.device === "browser" &&
    style.path === "REGISTER" &&
    css`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      padding: 4.5rem 3rem 3rem 3rem;
    `}
  `
);
export const ButtonsWrapper = styled.div(
  ({ style }) => css`
    width: 100%;
    height: ${style.path === "WELCOME" ? "55%" : "20%"};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem 3rem 0rem 3rem;
  `
);
export const LoginButton = styled.button(
  ({ style }) => css`
    font-size: ${style.isMobile ? "1.6rem" : "1.8rem"};
    background: transparent;
    border-radius: 0.5rem;
    color: white;
    border: 0.05rem solid white;
    padding: ${style.isMobile ? "0.5rem" : "0.8rem"} 0rem;
    font-weight: 600;
    cursor: pointer;
  `
);
export const RegisterButton = styled.button(
  ({ style }) => css`
    font-size: ${style.isMobile ? "1.6rem" : "1.8rem"};
    background: transparent;
    border-radius: 0.5rem;
    color: white;
    font-weight: 600;
    border: 0.05rem solid white;
    padding: ${style.isMobile ? "0.5rem" : "0.8rem"} 0rem;
    cursor: pointer;
  `
);

const showErrorAniamtion = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;
//
export const ErorrMessageWrapper = styled.div`
  position: relative;
  background: #af2824;
  text-align: right;
  min-width: 45%;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #af2824;
  float: right;
  right: 20px;
  animation: ${showErrorAniamtion} 0.25s linear forwards;
  &::before {
    content: "";
    position: absolute;
    visibility: visible;
    top: -0.1rem;
    right: -1rem;
    border: 0.9rem solid transparent;
    border-top: 0.4rem solid #af2824;
  }

  &::after {
    content: "";
    position: absolute;
    visibility: visible;
    top: 0rem;
    right: -0.8rem;
    border: 1rem solid transparent;
    border-top: 1rem solid #af2824;
    clear: both;
  }
`;
export const ErrorMessage = styled.span(
  ({ style }) => css`
    font-size: ${style.isMobile ? "1.4rem" : "1.6rem"};
    color: white;
    font-weight: 600;
  `
);

export const ErrorMessageContainer = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: flex-end;
  /* padding: 3rem 1rem 0rem 0rem; */
  overflow: hidden;
`;

export const FormContent = styled.div(
  ({ style }) => css`
    width: 100%;
    /* width: 100%;
    height: ${style.path === "WELCOME"
      ? "25%"
      : style.path === "LOGIN"
      ? "35%"
      : "45%"};
    display: flex;
    flex-direction: column;
    margin-top: ${style.path === "WELCOME" ? "0rem" : "2rem"};
    ${style.isMobile &&
    css`
      height: ${style.path === "LOGIN" ? "37%" : "47%"};
    `} */
  `
);
