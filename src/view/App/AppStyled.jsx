// LIBRARIES
import styled, { css } from "styled-components";
import MessageIcon from "@mui/icons-material/Message";


// constainer
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  /* min-height: 100vh;
  min-height: -webkit-fill-available; */
  /* background-color:red; */
}
`;

export const ServersWrapper = styled.div(
  ({ style }) => css`
    width: 100%;
    height: 9rem;
    overflow-x: scroll;
    overflow-y: hidden;
    background-color: #5f585850;
    display: flex;
    align-items: center;
    &::-webkit-scrollbar {
      display: none;
    }
    /* background-color:blue; */
  `
);

export const UsersWrapper = styled.div(
  ({ style }) => css`
  /* background-color: #22222250; */
    ${style.display === "mobile" &&
    css`
      width: 100%;
      height:100%;
      /* background-color:grey; */
     
    `}
    ${style.display === "browser" &&
    css`
      width: 25%;
    `}
  `
);

export const ChatWrapper = styled.div(
  ({ style }) => css`
    ${console.log(style)}
    width: 100%;
    height: 100%;
    padding: ${style.display === "browser" ? "1rem" : "0rem"};
  `
);

export const ChatDesktopLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #302a493d;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LayoutIcon = styled(MessageIcon)`
  &.MuiSvgIcon-root {
    color: #ffffff9e;
    font-size: 15rem;
  }
`;
