import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeedbackMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
    font-family: sans-serif;
    color: #64b64d;
  }
`;
