import React from 'react'
import { Infos, Intro, Name } from '../../styles/styles'
import { Container } from '../../styles/Portifolio'
import "../../styles/portifolio.module.scss"
import Link from 'next/link'
const Contacts: React.FC = () => {
    return (
<React.Fragment>
<Infos>

        <Name>
            Contatos
        </Name>

        <Intro>
        <Link href="https://www.linkedin.com/in/cgoulart01/"  ><a className="link" target='_blank'><strong className='strong'>Linkedin:</strong>{"https://www.linkedin.com/in/cgoulart01/"}</a></Link> 
            <br/>
            <Link href="https://www.linkedin.com/in/cgoulart01/"  ><a className="link" target='_blank'><strong className='strong'>Github:</strong>{"https://www.linkedin.com/in/cgoulart01/"}</a></Link>
            <br />
        </Intro>
</Infos>
 </React.Fragment>
)
}

export default Contacts
