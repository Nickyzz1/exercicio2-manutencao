import style from './App.module.css'
import { Card2 } from './components/Card2'
import { useEffect, useState } from 'react'
import { api } from "./api/rmApi"
import App from './App';

const Api = () =>{

    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        api.get(`/character/?page=${page}&name=${name}`).then((response) => {
          if(!response.data.results){
            console.log("Vazio")
          }
          setData(response.data.results)
        }).catch((error) => {
          if(error.response.status === 404){
            alert("Esta pagina nao contem este personagem")
          }
          console.error(error)
        })
      }, [page, name])

    return (
    <>
    <App/>
        <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="number" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
            </div>
            <div>
               <input type="text" placeholder="Digite um nome" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.flex}>
            {data.map((item) => { 
             return(
              <div key={item.id} className={style.Card} >
                <Card2 name={item.name} species={item.species} gender={item.gender} type={item.type} status={item.status} image={item.image}/>
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
           })}
            </div>
       </>
</>)}

export default Api;


