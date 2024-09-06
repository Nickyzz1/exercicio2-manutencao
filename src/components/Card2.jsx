/* eslint-disable react/prop-types */
import style from '../App.module.css'
export const Card2 = ({name, species, status, type, gender, image}) => {
  return(
      <div>
        {/* <div className= {status == "disponível"? style.green:style.red } >{status}</div> */}
        <div className={style.center}>
          <h1>{name}</h1>
          <h2>{status}</h2>
          <p>{species}</p>
          <p>{type}</p>
          <p>{gender}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
        </div>
      </div>
  )
}