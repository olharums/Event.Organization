import styled from "styled-components";

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: #f3ddf3;
  width: 100%;
  height: 100%;

  h1 {
    color: #a78adc;
  }

  .spinner-border {
    border-color: #a78adc;
    border-right-color: transparent;
    margin-top: 1rem;
  }
`;
