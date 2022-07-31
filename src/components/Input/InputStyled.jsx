// LIBRARIES
import styled, { css } from "styled-components";

export const Input = styled.input(
  ({ style }) => css`
    font-size: ${style.style ? "1.6rem" : "2rem"};
    background-color: transparent;
    border-width: 0 0 0.1rem;
    color: white;
    outline: none;
    border-radius:0;
    padding-bottom: 0.2rem;
    padding-left: 0.5rem;
    border-color: white;
    &::placeholder {
      color: #ffffff;
    }
    &:focus::placeholder {
      color: transparent;
    }
  `
);
