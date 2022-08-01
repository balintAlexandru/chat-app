// LIBRARIES
import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ style }) => css`
    width: 100%;
    height: 7rem;
    min-width: 0;
    padding: 5rem 0rem;
    display:flex;
    align-items:center;
    gap: ${style.styleType === "mobile" ? "4rem" : "1.5rem"};
    padding:0 2rem;
    
  `
);

export const ServerIconWrapper = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  flex: 0 0 5.5rem;
  justify-content: center;
  align-items: center;
  &:not(:last-of-type) {
      /* margin-right: 1.2rem; */
    }
   
`;
export const ServerIcon = styled.img`
  width: 100%;
  height: 100%;
`;
