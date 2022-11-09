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
        <section>
          <nav>
            <img src="/assets/logo-bb.png" alt="logo" className="logoHome"></img>
          </nav>
          <div className="waiting">
          <img src="/assets/background-wait.gif" className="wait" alt="waiting"></img>
          </div>
        </section>  
  )
}

export default Preparacion