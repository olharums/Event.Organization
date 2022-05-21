import styled from "styled-components";

export const BackgroundContainer = styled.div`
  height: 90%;
  width: 100%;
`;

export const Image = styled.img`
  position: relative;
  opacity: 0.4;
  width: 100%;
  height: 95vh;
  z-index: -999;
`;

export const Content = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  font-weight: 900;
  color: white;
  z-index: 999;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75vh;

    h1,
    h2 {
      text-align: center;
    }

    span {
      white-space: nowrap;
    }
  }
`;
