import styled from "styled-components"
 
interface ISidebar{
    sidebar:boolean
}

export const Container = styled.div`
height: 100px;
display:flex;
align-items:center;
justify-content:center;
border-bottom: 1px solid #eee;

`
export const Content = styled.div`
width: 1120px;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
min-width: max-content;
`

export const Title = styled.p`
font-weight: 500;
font-size: 40px;
@media (max-width:760px){
    font-size:25px
}
`

export const SubTitle = styled.span`
font-size: 20px;
@media (max-width:760px){
    font-size:15px
}
`
export const MenuBurger = styled.div<ISidebar>`

cursor: pointer;
svg{
fill:transparent
}
@media (max-width:560px) {
    padding-right: 10px;
    svg{
    font-size:35px;
    fill:${props=>props.sidebar?"transparent":"#eee"}
}
}
`
export const NavLinks = styled.div<ISidebar>`
display:flex;
gap: 20px;
@media (max-width:560px) {
flex-direction: column;
background-color: #161616;
position: fixed;
gap: 0px;
top:0px;
right:0px;
width: 100%;
right: ${props=>props.sidebar ? '0':"-100%"};
transition: 0.5ms;
height: 100%;

 button{
    margin-top: 150px;
    
 }
}
`
export const CloseSideBar = styled.div<ISidebar>`
display:  flex;
justify-content: flex-end;
svg{
    fill:transparent
}
@media (max-width:560px) {
    svg{
        margin: 20px;
    font-size: 30px;
    cursor: pointer;
    fill:${props=>props.sidebar?"#eee":"transparent"}
}
}
`
export const ContentTitle = styled.div`
text-align:end;
padding-right:40px;
border-right: 1px solid #eee
`
export const Anchor = styled.button`
text-decoration: none;
text-transform: none;
border: none;
padding:20px;
font-size: 20px;
background-color: transparent;
color: #eee;
border-radius: 6px;
&:hover{
background-color: #202020;
}
`

export const TitleProject = styled.strong``;

export const Url = styled.a`
&:hover{
    font-weight:bold;
}
`;

export const Created_at = styled.span``;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;
  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Name = styled.span`
  font-size: 40px;
  font-weight: 500;
  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Function = styled.span`
  color: lightgray;
  margin-bottom: 10px;
  
`;

export const Intro = styled.span`
  color: lightgray;
  text-align: justify;
  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const LinkProjects = styled.button`
  background-color:#333333;
  color: #eee;
  width: 13rem;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items:center;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 16px;
  border:none;
  svg {
    font-size: 20px;
    background-color:transparent;
    
    fill:#eee;
  }
  &:hover{
    background-color: #ccc;
    color:#121212;
    svg{
      font-size: 20px;
    background-color:transparent;
    fill:#121212;
    }
  }
`

export const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: left;
  img {
    margin-top: 5%;
    width: 25rem;
    height: 25rem;
    border-radius: 100%;
  }
  @media (max-width: 760px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    img {
      margin-top: 5%;
      width: 18rem;
      height: 18rem;
      border-radius: 100%;
    }
  }
`;

export const Img = styled.img`


`