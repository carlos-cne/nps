import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: row;
    margin: 10px;
    width: 100%;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f3f3f3;

  font-size: 18;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 50px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  /* Se der tempo vou implementar as props */
  :nth-child(1) {
    background: #b72025;
  }
  :nth-child(2) {
    background: #d62027;
  }
  :nth-child(3) {
    background: #f05222;
  }
  :nth-child(4) {
    background: #f36f21;
  }
  :nth-child(5) {
    background: #faa823;
  }
  :nth-child(6) {
    background: #ffca27;
  }
  :nth-child(7) {
    background: #ecdb12;
  }
  :nth-child(8) {
    background: #e8e73d;
  }
  :nth-child(9) {
    background: #c5d92e;
  }
  :nth-child(10) {
    background: #aed136;
  }
  :nth-child(11) {
    background: #64b64d;
  }
  :hover {
    font-size: 20px;
    width: 55px;
    height: 55px;
  }
`;

export const CustumerFeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 50%;
  min-width: 400px;
`;

export const ButtonContainer = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  background: ${props => (props.primary ? "#64b64d" : "#b72025")};
`;

export const CustumerFeedback = styled.textarea`
  height: 100px;
  font-size: 18px;
  color: #333;
  border: 1px dashed #666;
  border-radius: 10px;
  resize: none;
  ::placeholder {
    color: #999;
    font-size: 16px;
    text-align: start;
  }
`;
