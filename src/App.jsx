import style from './App.module.css'


function App() {

return (
    <>
     <div className={style.wrapBtns}>
      <a href='/Products'><button>Produtos</button></a>
      <a href="/Api"><button>API</button></a>
      <a href="/Map"><button >Mapa</button></a>
      <a href="/Graph"><button >Graph</button></a>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
    </div>
    </>)}
      
export default App;
