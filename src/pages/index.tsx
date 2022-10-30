import type { NextPage } from 'next'
import Link from 'next/link'
import { homedir } from 'os'
import Header from '../Components/Header/Header'
import { Function, Img, Infos, Intro, LinkProjects, Logo, Name } from '../styles/styles'
import { AboutMe, Container } from './portifolio/Portifolio'
import {FaArrowRight} from "react-icons/fa"
import { Content } from '../styles/home'



const Home: NextPage = () => {
  return (<>
  
    <Container>
      <Content>
        <Infos>
         <Name> Olá nome é Caio Vitor </Name>
         <Function>Desenvolvedor Front-end Junior</Function>
         <Intro>Com habilidades em Clean Code, Desenvolvimento Modular para Web e Smart-tvs, Git (GitHub e Azure), HTML5, CSS3 com Flexbox e grid templates, SASS e SCSS, Javascript, React.js e Next.js com Typescript entre outros frameworks. </Intro>
          <Link href="/portifolio">
          <LinkProjects> PORTIFÓLIO <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
      </Content>
     <Logo> <Img src="/images/1625357797671.jpeg" alt="logo"  /></Logo>
    </Container>
  </>
  )
}

export default Home
