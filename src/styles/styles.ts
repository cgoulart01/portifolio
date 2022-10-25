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
`

export const SubTitle = styled.span`
font-size: 20px;
`
export const MenuBurger = styled.div<ISidebar>`
cursor: pointer;
svg{
fill:transparent
}
@media (max-width:560px) {
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
width: 60%;
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