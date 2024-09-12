import Draggable from 'react-draggable';
import style from '../App.module.css'
import { Card2 } from './Card2'


const ModalInfo = (item) => {
    console.log(item)
    return(
        <Draggable>
       <div key={item.data.id} className={style.Card3}>
                <Card2 name={item.data.name} species={item.data.species} gender={item.data.gender} type={item.data.type} status={item.data.status} image={item.data.image}/>
            
       <button onClick={item.close}>&#128473;</button>
              </div>
        </Draggable>
    )
}
export default ModalInfo;