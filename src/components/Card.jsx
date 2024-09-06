/* eslint-disable react/prop-types */
import style from '../App.module.css'
export const Card = (props) => {
  return(
      <div>
        <div className= {props.status == "disponível"? style.green:style.red } >{props.status}</div>
        <h1>{props.name}</h1>
        <h2>{props.desc}</h2>
        <p>{props.value}</p>
        <img src={props.image} alt={props.name} width={150} height={"auto"}/>
      </div>
  )
}