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
max-width:1120px;
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
height:100px

`


