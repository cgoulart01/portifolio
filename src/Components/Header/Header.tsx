import Link from 'next/link'
import React, { useState } from 'react'
import { Anchor, CloseSideBar, Container, Content, ContentTitle, MenuBurger, NavLinks, SubTitle, Title } from '../../styles/styles'
import {GiHamburgerMenu} from "react-icons/gi"
import {RiCloseFill} from "react-icons/ri"
const Header: React.FC = () => {
    const [sidebar,setSideBar] = useState(false)

const handleSideBar = () =>{
    setSideBar(!sidebar)
}



    return (
<React.Fragment>
<Container>
<Content>
<ContentTitle>
    <Title>
        Caio Vitor Goulart
    </Title>
    <SubTitle>
        Desenvolvedor Front-end
    </SubTitle>
</ContentTitle>
<MenuBurger onClick={handleSideBar} sidebar={sidebar}>
<GiHamburgerMenu />
</MenuBurger>
<NavLinks sidebar={sidebar}>
    <CloseSideBar sidebar={sidebar}>
    <RiCloseFill onClick={handleSideBar} />
    </CloseSideBar>
    <Link href="/">
    <Anchor onClick={handleSideBar}>Início</Anchor>
        </Link>
    <Link href="portifolio" ><Anchor onClick={handleSideBar}>Portifólio</Anchor></Link>
    <Link href="contacts"><Anchor onClick={handleSideBar}>Contatos</Anchor></Link>

</NavLinks>
</Content>
</Container>

 </React.Fragment>
)
}

export default Header
