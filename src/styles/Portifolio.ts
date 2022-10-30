import styled from "styled-components"

export const UlRepos = styled.ul`
overflow-x:auto;
height:inherit;

`
export const Content = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding: 20px;
height: 100%;

@media (max-width:600px) {
    padding:5px
}
`










export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
height: calc(100vh -150px);

&::-webkit-scrollbar{
background-color: #EEE;
border-radius: 10px;
}
`
export const LiRepos = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 10px 10px 20px;
  box-shadow: 1px 1px 1px 2px gray;
  
  gap: 5px;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 760px) {
   font-size: 13px;
  }

`

export const AboutMe = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }

`
