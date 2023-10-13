import { styled } from "styled-components";

export const CountDownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media screen and (width <= 640px) {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
  }
`;

export const Minutes = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-500"]};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media screen and (width <= 640px) {
    display: none;
  }
`;

export const Seconds = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
