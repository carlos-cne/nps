import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  background: url(https://blog.edx.org/wp-content/uploads/2016/02/Programming-Skills.jpg)
    center no-repeat #111;
`;
export const Title = styled.p`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  font-stretch: expanded;
  margin-top: 100px;
  margin-left: 80px;
`;

export const LanguageButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
  }
`;
