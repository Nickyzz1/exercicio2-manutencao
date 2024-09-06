/* eslint-disable react/prop-types */
import style from '../App.module.css'
export const Card = ({name, desc, value, status, image}) => {
  return(
      <div>
        <div className= {status == "disponível"? style.green:style.red } >{props.status}</div>
        <h1>{name}</h1>
        <h2>{desc}</h2>
        <p>{value}</p>
        <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}