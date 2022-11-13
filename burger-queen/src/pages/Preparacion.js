import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home'
import Listo from '../pages/Listo'

function Preparacion(){
  return(
        <section className="prep">
          <nav>
            <img src="/assets/logo-bb.png" alt="logo" className="logoHome"></img>
          </nav>
          <span className="tittle-prep">Preparando <strong>algo especial</strong> para ti!</span>
          <div className="waiting">
          <img src="/assets/background-wait.gif" className="wait" alt="waiting"></img>
          </div>
        </section>  
  )
}

export default Preparacion