import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export function SubHome(){
  return(
    <p>SubHome</p>
  )
}

function Home(){

  return(
    <section className="Home">
      <nav>
        <img src="/assets/logo-bb.png" alt="logo" className="logoHome"></img>
      </nav>
      <main>
        <div>
          <div>
          <h1><strong>Comienza</strong> tu comanda!</h1>
          <Link className="btn-home" to="/menu">Mesero</Link>
          <Link className="btn-home1" to="/preparacion">Cocina</Link>
          </div>
        </div>
        <div>
        <img src="assets/cartas-claro.png" alt="cartasHome" className="cartasHome"></img>
        </div>
      </main>
      <footer>
      <p className="footer">Emily Negrette © All rights reserved 2022.</p>
      </footer>
    </section>
  )
}

export default Home