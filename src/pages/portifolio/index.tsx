import React, { useEffect, useState } from 'react'
import { Container, Content, LiRepos, UlRepos } from './Portifolio'



interface IApi {

"id": string,
"name": string,
"full_name"?: string,
"html_url"?: string,
"url":string,
"downloads_url": string,
"created_at": string,
}







const Portifolio: React.FC = () => {
const [itemApi,SetItemApi] = useState([])

useEffect(()=>{
    let abortedController = new AbortController()
    const githubApi = () =>{
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
                <LiRepos key={item.id}>
                   {item.name}
                   {item.url}
                   {item.created_at}
                   {item.downloads_url}
                  
                </LiRepos>
            ))
          }
        </UlRepos>
    </Content>
</Container>
 </React.Fragment>
)
}

export default Portifolio
