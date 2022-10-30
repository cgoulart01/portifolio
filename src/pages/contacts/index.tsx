import React from 'react'
import { Infos, Intro, Name } from '../../styles/styles'
import { Container } from '../../styles/Portifolio'
import "../../styles/portifolio.module.scss"
import Link from 'next/link'
import { RiWhatsappFill } from 'react-icons/ri'
import {BsGithub, BsLinkedin} from "react-icons/bs"
const Contacts: React.FC = () => {
    return (
<React.Fragment>
<Infos>

        <Name>
            Contatos
        </Name>

        <Intro>
        <Link href="https://www.linkedin.com/in/cgoulart01/"  ><a className="link" target='_blank'> <BsLinkedin/> <strong className='strong2'>Linkedin:</strong>{"https://www.linkedin.com/in/cgoulart01/"}</a></Link> 
            <br/>
            <Link href="https://github.com/cgoulart01"  ><a className="link" target='_blank'>
            <BsGithub/>
                <strong className='strong2'>Github:</strong>{"https://github.com/cgoulart01"}</a></Link>
            <br />
            <Link href="https://api.whatsapp.com/send?phone=5521981558598&text=Ol%C3%A1%20Caio%2C%20vi%20seu%20portif%C3%B3lio!%20Poder%C3%ADamos%20falar%20mais%20sobre%20a%20sua%20forma%20de%20trabalho%3F%3F%3F/"  ><a className="link" target='_blank'>
                <RiWhatsappFill /><strong className='strong2'>
                Whatsapp
                </strong>{"Clique Aqui"}</a></Link>
        </Intro>
</Infos>
 </React.Fragment>
)
}

export default Contacts
