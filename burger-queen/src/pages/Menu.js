import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home'
import Preparacion from '../pages/Preparacion'
import Listo from '../pages/Listo'
import productos from '../productos.json'

function Menu(){
  const productosMenu = productos;
  console.log(productosMenu)
  return(
    <section>
      <nav>
        <img src="/assets/logo-bb.png" alt="logo" className="logoHome"></img>
      </nav>
          <div className="container-menu">
            <h3 className="tittle-menu">Sandwich</h3>
              {productos.Sandwich.map(e => 
                <div className="card">
                  <div className="img-sandwich" style={{background:`url(${e.img}) center no-repeat`}}></div>
                    <div className="list">
                    <ul>
                      <li>{e.title}</li>
                      <li>{e.description}</li>
                      <li>{e.price}</li>
                    </ul>
                   <button className="btn-agregar">- Agregar +</button>
                   </div>
                  </div>
              )}   
          {/*  <h3 className="tittle-menu">Waffles</h3>
              {productos.Waffles.map(e => 
                <div className="card2">
                  <div className="img-waffles" style={{background:`url(${e.img}) center no-repeat`}}></div>
                    <div className="list2">
                    <ul>
                      <li>{e.title}</li>
                      <li>{e.description}</li>
                      <li>{e.price}</li>
                    </ul>
                   <button className="btn-agregar">- Agregar +</button>
                    </div>
                  </div>    
              )} */}
            <h3 className="tittle-menu">Postres</h3>
              {productos.Postres.map(e => 
                <div className="card">
                  <div className="img-postres" style={{background:`url(${e.img}) center no-repeat`}}></div>
                    <div className="list">
                    <ul>
                      <li>{e.title}</li>
                      <li>{e.description}</li>
                      <li>{e.price}</li>
                    </ul>
                   <button className="btn-agregar">- Agregar +</button>
                    </div>
                  </div>
                )}
           {/* <h3 className="tittle-menu">Cafes</h3>
              {productos.Cafes.map(e => 
                <div className="card2">
                  <div className="img-cafes" style={{background:`url(${e.img}) center no-repeat`}}></div>
                    <div className="list2">
                    <ul>
                      <li>{e.title}</li>
                      <li>{e.description}</li>
                      <li>{e.price}</li>
                    </ul>
                   <button className="btn-agregar">- Agregar +</button>
                    </div>
                  </div>
              )} */}
              </div> 
          <Link className="btn-enviar" to="/preparacion">Enviar pedido</Link>
    </section>
  );
}

export default Menu