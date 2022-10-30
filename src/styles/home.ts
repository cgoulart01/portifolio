import styled from "styled-components";

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width:760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;