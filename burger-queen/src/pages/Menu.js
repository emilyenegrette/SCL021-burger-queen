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
  return(
    <section>
      <nav>
        <div className="alignNav">
        <img src="/assets/logo-bb.png" alt="logo" className="logoHome"></img>
        <div className="carrito">
          <img src="/assets/carrito-de-compras.png" alt="carrito" className="img-carrito"></img>
        </div>
        </div>
      </nav>
          <div className="container-menu">
            <div class="column">
              <h3 className="tittle-menu">Sandwich</h3>
                {productos.Sandwich.map(e => 
                  <div className="card">
                    <div className="img-menu" style={{background:`url(${e.img}) center no-repeat`}}></div>
                      <div className="list">
                        <ul>
                          <li><strong>{e.title}</strong></li>
                          <li>{e.description}</li>
                          <li>{e.price}</li>
                        </ul>
                        <button className="btn-agregar">Agregar</button>
                      </div>
                    </div>
                )}

                <h3 className="tittle-menu">Postres</h3>
              {productos.Postres.map(e => 
                <div className="card">
                  <div className="img-menu" style={{background:`url(${e.img}) center no-repeat`}}></div>
                    <div className="list">
                    <ul>
                      <li><strong>{e.title}</strong></li>
                      <li>{e.description}</li>
                      <li>{e.price}</li>
                    </ul>
                   <button className="btn-agregar">Agregar</button>
                    </div>
                  </div>
                )} 

            </div>
            <div class="column">

              <h3 className="tittle-menu">Waffles</h3>
                {productos.Waffles.map(e => 
                  <div className="card">
                    <div className="img-menu" style={{background:`url(${e.img}) center no-repeat`}}></div>
                      <div className="list">
                      <ul>
                        <li><strong>{e.title}</strong></li>
                        <li>{e.description}</li>
                        <li>{e.price}</li>
                      </ul>
                    <button className="btn-agregar">Agregar</button>
                      </div>
                    </div>    
                )}

                <h3 className="tittle-menu">Cafes</h3>
              {productos.Cafes.map(e => 
                <div className="card">
                  <div className="img-menu" style={{background:`url(${e.img}) center no-repeat`}}></div>
                    <div className="list">
                    <ul>
                      <li><strong>{e.title}</strong></li>
                      <li>{e.description}</li>
                      <li>{e.price}</li>
                    </ul>
                    <div className="btn">
                   <button className="btn-agregar">Agregar</button>
                   </div>
                    </div>
                  </div>
              )}  
              
            </div>
              </div> 
    </section>
  );
}

export default Menu