import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Created_at, TitleProject, Url } from '../../styles/styles'
import { formatedDate } from '../../utils/formatToUTC'
import { Container, Content, LiRepos, UlRepos } from './Portifolio'



interface IApi {

"id": string,
"name": string,
"full_name"?: string,
"html_url": string,
"url":string,
"downloads_url": string,
"created_at": string,
}







const Portifolio: React.FC = () => {
const [itemApi,SetItemApi] = useState([])

useEffect(()=>{
    let abortedController = new AbortController()
    const githubApi = () =>{
        //** Trocar o usuário para o seu  https://api.github.com/users/[Nome_do_Usuário]/repos */
        
        fetch("https://api.github.com/users/cgoulart01/repos")
        .then(async (res ) =>{
            if(!res?.ok){
                const error = res.status.toString()
                throw new Error(error)
            }
            const data = await res.json()
            SetItemApi(data)
        })
        .catch(
            e =>console.log(e)
        )
    }
    githubApi()

    return () => abortedController.abort()
},[itemApi])



return (
<React.Fragment>
<Container>
    <Content>
        <UlRepos>
          {
            itemApi.map((item:IApi)=>(
                <>
                <LiRepos key={item.id}>
                   <TitleProject>{`Nome do Repositório: ${item.name.toUpperCase()}`}</TitleProject>
                   <Link href={item.html_url}  ><a className="link" target='_blank'><strong className='strong'>Link do Repositório:</strong>{item.url}</a></Link>    
                   <Created_at><strong className='strong' >Data de Criação:</strong>{formatedDate(item.created_at)}</Created_at>
                    {item.name=== "pomodoro"&&(
                       <Link href="https://pomodoro-sooty.vercel.app/"  ><a className="link" target='_blank'><strong className='strong'>Link do site:</strong> https://pomodoro-sooty.vercel.app/</a></Link> 
                    )
                    }
                </LiRepos>
                </>

            ))
          }
        </UlRepos>
    </Content>
</Container>
 </React.Fragment>
)
}

export default Portifolio
