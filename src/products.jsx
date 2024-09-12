import { Card } from './components/Card'
import produtos from './constants/produtos.json'
import style from './App.module.css'
import App from './App'

const Products = () => {

  return (
    <>
  <App/>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.flex}  >
            {produtos.map((item, index) => {
              return(
                  <div key={index} className={style.Card}>
                  <Card status={item.status} name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id}/>
                </div> )
             })}
            </div>
        </>
    </div>
    </>)};

export default Products;
